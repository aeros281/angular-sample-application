import { Component, OnInit, Inject } from '@angular/core';
import { StaffResourceService } from '../staff-resource.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StaffDetailWrapperComponent } from '../staff-detail-wrapper/staff-detail-wrapper.component';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.scss']
})
export class StaffDetailComponent implements OnInit {

  staff: any;

  constructor(
    private staffService: StaffResourceService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<StaffDetailWrapperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
   ) { }

  ngOnInit(): void {
    this.staffService.getStaffById(this.data.id).subscribe((value) => {
      this.staff = value;
    });
  }

}
