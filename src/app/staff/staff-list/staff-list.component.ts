import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  private resources = [
    {
      id: 1,
      name: 'Anh Le Tuan Tran',
      dateOfBirth: '10/10/1992',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
