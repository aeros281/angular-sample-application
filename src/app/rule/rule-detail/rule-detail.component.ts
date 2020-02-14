import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RuleResourceService } from '../rule-resource.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-rule-detail',
  templateUrl: './rule-detail.component.html',
  styleUrls: ['./rule-detail.component.scss']
})
export class RuleDetailComponent implements OnInit {

  rule: any;

  constructor(
    private ruleService: RuleResourceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => { 
        const ruleId: number = parseInt(params.get('id'), 10);
        return this.ruleService.getRuleById(ruleId);
      })
    ).subscribe((value: any) => {
      this.rule = value;
    });
  }

}
