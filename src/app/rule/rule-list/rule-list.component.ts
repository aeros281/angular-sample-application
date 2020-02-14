import { Component, OnInit } from '@angular/core';
import { RuleResourceService } from '../rule-resource.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.scss']
})
export class RuleListComponent implements OnInit {

  ruleList: Observable<any[]>;

  constructor(
    private ruleService: RuleResourceService
  ) { }

  ngOnInit(): void {
    this.ruleList = this.ruleService.getRuleList();
  }

}
