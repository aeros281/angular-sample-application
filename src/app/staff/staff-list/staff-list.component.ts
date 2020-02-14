import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StaffResourceService } from '../staff-resource.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'username', 'email', 'gender', 'dateofbirth', 'operations', ];

  pagedStaffList: Observable<any[]>;
  pageInfo: Observable<any>;

  itemPerPage = 8;

  constructor(private staffService: StaffResourceService) {
  }

  ngOnInit(): void {
    this.onPageChanged(1);
  }

  onPageChanged(pageNum: number) {
    console.log(pageNum);
    this.pagedStaffList = this.staffService.getStaffList(pageNum, this.itemPerPage);
    this.pageInfo = this.staffService.getPageInfo();
  }

}
