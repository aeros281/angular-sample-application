import { Component, OnInit } from '@angular/core';
import {StaffCreateForm} from 'src/app/module/staff/staff-create/staff-create.form';
import {sensitiveFullName} from 'src/app/module/staff/staff-create/staff-validators';

@Component({
  selector: 'app-staff-create',
  templateUrl: './staff-create.component.html',
  styleUrls: ['./staff-create.component.scss']
})
export class StaffCreateComponent implements OnInit {

  createForm: StaffCreateForm;

  constructor() { }

  ngOnInit(): void {
    this.createForm = new StaffCreateForm(
      sensitiveFullName()
    );
  }

  onSubmit(): void {
    console.log(this.createForm.value);
  }

}
