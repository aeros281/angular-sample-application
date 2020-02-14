import { Component, OnInit } from '@angular/core';
import { FAKE_USERS } from '../fake-user';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';
import { StaffResourceService } from '../staff-resource.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'username', 'email', 'gender', 'dateofbirth', 'operations', ];
  staffList: Observable<any[]>;

  constructor(private staffService: StaffResourceService) {
  }

  ngOnInit(): void {
    this.staffList = this.staffService.getStaffList(1, 10);
  }

}
