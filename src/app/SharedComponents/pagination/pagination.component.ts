import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() value = 1;
  @Input() total = 10;
  @Input() pageSize = 10;
  @Input() visibleRangeLength = 5;
  @Output() valueChange = new EventEmitter<number>();
  public totalPages: number=0;
  public visiblePages: number[]=[];
  constructor() { }

  ngOnInit(): void {
    this.updateVisiblePages();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.total || changes.pageSize) this.updateTotalPages();
  }
  public selectPage(page: number): void {
    this.value = page;
    this.updateVisiblePages();
    this.valueChange.emit(this.value);
  }
  public updateVisiblePages(): void {
    const length = Math.min(this.totalPages, this.visibleRangeLength);
    const startIndex = Math.max(
      Math.min(
        this.value - Math.ceil(length / 2),
        this.totalPages - length
      ),
      0
    );
    this.visiblePages = Array.from(
      new Array(length).keys(),
      (item) => item + startIndex + 1
    );
  }
  private updateTotalPages(): void {
    this.totalPages = Math.ceil(this.total / this.pageSize);
  }

}




