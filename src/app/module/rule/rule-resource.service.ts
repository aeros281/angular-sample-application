import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RuleResourceService {

  private ruleList: any[];

  constructor() {
    this.ruleList = [
      { id: 1, name: 'Public-Private', algorithm: 'RSA-256', },
      { id: 2, name: 'Symmetric', algorithm: 'AES', },
      { id: 3, name: 'Simple', algorithm: 'Caesar', },
      { id: 4, name: 'Dummy', algorithm: '#####', },
    ]
  }

  getRuleList(): Observable<any[]> {
    return of(this.ruleList);
  }

  getRuleById(id: number): Observable<any>{
    return of(this.ruleList[id - 1]);
  }
}
