import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StaffDetailComponent } from '../staff-detail/staff-detail.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-staff-detail-wrapper',
  templateUrl: './staff-detail-wrapper.component.html',
  styleUrls: ['./staff-detail-wrapper.component.scss']
})
export class StaffDetailWrapperComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      const staffId: number = parseInt(params.get('id'), 10);

      const dialogRef = this.dialog.open(StaffDetailComponent, { data: { id: staffId }});
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['../'], { relativeTo: this.route, queryParams: this.route.snapshot.queryParams });
      });
    });
  }

}
