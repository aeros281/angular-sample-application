import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router, ActivatedRoute } from '@angular/router';

import {StaffCreateComponent} from '../staff-create/staff-create.component';

@Component({
  selector: 'app-staff-create-wrapper',
  templateUrl: './staff-create-wrapper.component.html',
  styleUrls: ['./staff-create-wrapper.component.scss']
})
export class StaffCreateWrapperComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const dialogRef = this.dialog.open(StaffCreateComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route, queryParams: this.route.snapshot.queryParams });
    });

  }

}
