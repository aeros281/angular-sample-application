import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FAKE_USERS } from './fake-user';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaffResourceService {

  private staffList: any[];

  constructor() {
    this.staffList = FAKE_USERS;
  }

  getPageInfo() {
    return of({
      count: this.staffList.length
    });
  }

  getStaffList(pageNumber: number, itemPerPage: number) {
    const start = pageNumber * itemPerPage;
    const end = start + itemPerPage;
    return of(this.staffList.slice(start, end)).pipe(delay(500));
  }

  getStaffById(id: number) {
    return of(this.staffList[id - 1]);
  }
}
