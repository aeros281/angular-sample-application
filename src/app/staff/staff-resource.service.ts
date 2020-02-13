import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FAKE_USERS } from './fake-user';

@Injectable({
  providedIn: 'root'
})
export class StaffResourceService {

  private staffList: any[];

  constructor() {
    this.staffList = FAKE_USERS;
  }

  getStaffList() {
    return of(this.staffList);
  }

  getStaffById(id: number) {
    return of(this.staffList[id - 1]);
  }
}
