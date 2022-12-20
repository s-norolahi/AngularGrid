import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() list: Array<any> = [];
  @Input() config: TableViewConfig = { columns: [], keyField: 'id' };
  @ViewChild('paginator') paginator: PaginationComponent | undefined;
  @Output() addNew = new EventEmitter<any>();
  searchValue: string = '';
  selectedRow: any = null;
  tempItem: any = null;
  editedItem: any = null;
  newItem: any = null;
  pageSize: number = 4;
  currentPage: number = 1;
  constructor() { }
  ngOnInit(): void {
    this.newItem = this.createNewItem();
  }
  //#region public functions
  edit(item: any) {
    console.log(item, 'item');
    this.editedItem = item;
  }
  save(item: any) {
    this.list[this.findIndexInList(item)] = this.tempItem;
    this.tempItem = null;
  }
  addItem() {
    this.list.push(this.newItem);
    this.newItem = this.createNewItem();
  }
  removeItem(item: any) {
    console.log(item, 'remove item');
    this.list.splice(this.findIndexInList(item), 1);
  }
  rowClick(item: any) {
    this.selectedRow = item;
    this.tempItem = Object.assign({}, item);
    console.log(this.selectedRow, 'selected row');
  }
  setParentValue(item: any, colName: string, e: any) {
    this.tempItem[colName] = e.target.value;
  }
  setNewItem(colName: string, e: any) {
    this.newItem[colName] = e.target.value;
  }
  onPageChange(page: any) {
    this.currentPage = page;
  }
  refreshPager() {
    setTimeout(() => {
      this.paginator?.updateVisiblePages();
    }, 100);

  }
  //#endregion
  get editClicked() {
    return this.selectedRow == this.editedItem;
  }
  get filterdList() {
    let outList: any[] = [], filterd: any[] = [];
    if (this.searchValue == '')
      return this.list;
    let searchableColumns = this.config.columns.filter(e => ((e.isFilter == true || e.isFilter === undefined)));
    searchableColumns.forEach(col => {
      filterd = this.list.filter(result => { return ('' + result[col.name]).toLowerCase().includes((this.searchValue).toLowerCase()) });
      if (filterd.length > 0) {
        filterd.forEach(elem => {
          if (outList.filter(result => { return ('' + result[this.config.keyField]) == (elem[this.config.keyField]) }).length == 0)
            outList.push(elem);
        })
      }
    });
    this.currentPage = 1;
    return outList;
  }
  get pagedList() {
    return this.filterdList.slice(((this.currentPage - 1) * this.pageSize), ((this.currentPage) * this.pageSize))
  }
  //#region private methods
  private createNewItem() {
    let item: any = {};
    item[this.config.keyField] = this.list[this.list.length - 1][this.config.keyField] + 1;
    this.config.columns.forEach(column => {
      item[column.name] = null;
    });
    return item;
  }
  private findIndexInList(item: any): number {
    return this.list.findIndex(x => x[this.config.keyField] == item[this.config.keyField])
  }
  //#endregion

}
export interface TableViewConfig {
  keyField: string;
  columns: any[];
}
