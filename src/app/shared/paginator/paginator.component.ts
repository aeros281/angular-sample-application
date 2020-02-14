import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() totalItemLength: number;
  @Input() itemPerPage: number;
  @Input() maximumPaddingNumber = 3;
  @Input() currentPage: number;

  @Output() pageChanged = new EventEmitter<number>();

  numOfPage: number;
  pageList: { text: string, pageNum?: number, isPageLink: boolean }[];

  constructor() { }

  ngOnInit(): void {
    this.setUpPageInfo();
  }

  ngOnChanges() {
    this.setUpPageInfo();
  }

  setUpPageInfo() {
    this.numOfPage = this.calculatePageInfo(this.totalItemLength, this.itemPerPage);
    this.calculatePageList();
  }

  setPage(pageNum: number): void {

    if (pageNum < 0 || pageNum > this.numOfPage) { return; }

    this.pageChanged.emit(pageNum);
  }

  calculatePageInfo(pageLength: number, itemPerPage: number): number {
    const extraPage: number = (pageLength % itemPerPage > 0) ? 1 : 0;
    return Math.floor(pageLength / itemPerPage) + extraPage;
  }

  calculatePageList() {
    const fullPageList: number[] = Array(this.numOfPage).fill(0).map(( _, index) => index + 1);
    let rightCutIndex: number = fullPageList.indexOf(this.currentPage) + this.maximumPaddingNumber + 1;
    let leftCutIndex: number = fullPageList.indexOf(this.currentPage) - this.maximumPaddingNumber;

    const outRangedLeft: number = (leftCutIndex > 0) ? 0 : -leftCutIndex;
    const outRangedRight: number = (rightCutIndex < fullPageList.length) ? 0 : rightCutIndex - fullPageList.length;

    rightCutIndex = (outRangedRight) ? fullPageList.length : rightCutIndex + outRangedLeft;
    leftCutIndex = (outRangedLeft) ? 0 : leftCutIndex  - outRangedRight;

    this.pageList = fullPageList.slice(leftCutIndex, rightCutIndex).map((value: number) => {
      return {
        text: value.toString(),
        pageNum: value,
        isPageLink: true,
      };
    });

    if (!outRangedLeft) { this.pageList.unshift({ text: '..', isPageLink: false }); }
    if (!outRangedRight) { this.pageList.push({ text: '..', isPageLink: false }); }
  }

}
