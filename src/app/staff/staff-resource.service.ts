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
    console.log(id);
    console.log(this.staffList[id-1]);
    return of(this.staffList[id - 1]);
  }
}
