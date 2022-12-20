import { Component, ElementRef, OnInit } from '@angular/core';
import { TableViewConfig } from '../grid/grid.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  isDark: boolean = false;
  constructor(private elementRef: ElementRef) { }
  config: TableViewConfig = { columns: [{ name: 'personName', displayName: 'person name' }, { name: 'email', displayName: 'email' },], keyField: "id" };
  list = [
    { id: 1, 'personName': 'test1', email: 'test@tes.com' },
    { id: 2, 'personName': 'test2', email: 'test@tes1.com' },
    { id: 3, 'personName': 'test3', email: 'test@tes1.com' },
    { id: 4, 'personName': 'test4', email: 'test@tes.com' },
    { id: 5, 'personName': 'test5', email: 'test@tes1.com' },
    { id: 6, 'personName': 'test6', email: 'test@tes1.com' },
    { id: 7, 'personName': 'test7', email: 'test@tes.com' },
    { id: 8, 'personName': 'test8', email: 'test@tes1.com' },
    { id: 9, 'personName': 'test9', email: 'test@tes1.com' },
    { id: 10, 'personName': 'test10', email: 'test@tes.com' },
    { id: 11, 'personName': 'test11', email: 'test@tes1.com' },
    { id: 12, 'personName': 'test12', email: 'test@tes1.com' },
    { id: 13, 'personName': 'test13', email: 'test@tes.com' },
    { id: 14, 'personName': 'test14', email: 'test@tes1.com' },
    { id: 15, 'personName': 'test15', email: 'test@tes1.com' },
    { id: 16, 'personName': 'test16', email: 'test@tes16.com' },
    { id: 17, 'personName': 'test17', email: 'test@tes17.com' },
    { id: 18, 'personName': 'test18', email: 'test@tes.com' },
    { id: 19, 'personName': 'test19', email: 'test@tes1.com' },
    { id: 20, 'personName': 'test20', email: 'test@tes1.com' },
    { id: 21, 'personName': 'test21', email: 'test@tes.com' },
    { id: 22, 'personName': 'test22', email: 'test@tes1.com' },
    { id: 23, 'personName': 'test23', email: 'test@tes1.com' }
  ];
  changeTheme() {
    this.isDark = !this.isDark;
    this.elementRef.nativeElement.ownerDocument.body.classList = this.isDark ? 'dark' : '';
  }
}
