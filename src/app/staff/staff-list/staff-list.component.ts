import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StaffResourceService } from '../staff-resource.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'username', 'email', 'gender', 'dateofbirth', 'operations', ];

  pagedStaffList: Observable<any[]>;
  pageInfo: Observable<any>;

  currentPage: number;
  itemPerPage = 8;

  constructor(
    private staffService: StaffResourceService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.currentPage = this.getPageNumberFromParamMap(params);
      this.changePage(this.currentPage);
    });
  }

  getPageNumberFromParamMap(params: ParamMap) {
    return parseInt(params.get('page'), 10) || 1;
  }

  changePage(pageNum: number) {
    this.pagedStaffList = this.staffService.getStaffList(pageNum, this.itemPerPage);
    this.pageInfo = this.staffService.getPageInfo();
  }

  onPageChanged(pageNum: number) {
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: { page: pageNum } });
  }

}
