import { Component, OnInit } from '@angular/core';
import { StaffResourceService } from '../staff-resource.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.scss']
})
export class StaffDetailComponent implements OnInit {

  staff: any;

  constructor(
    private staffService: StaffResourceService,
    private route: ActivatedRoute
   ) { }

  ngOnInit(): void {
    this.staff = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => { 
        const staffId: number = parseInt(params.get('id'), 10);
        return this.staffService.getStaffById(staffId);
      })
    );
  }

}
