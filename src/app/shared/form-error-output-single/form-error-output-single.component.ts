import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-form-error-output-single',
  templateUrl: './form-error-output-single.component.html',
  styleUrls: ['./form-error-output-single.component.scss']
})
export class FormErrorOutputSingleComponent implements OnInit, OnChanges {

  @Input() controlName: string;
  @Input() errorDictionary: { [key: string]: any };
  errorMessages: string[];

  messageMap = {
    required: ' is required',
    email: ' must be in email format',
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.errorMessages = Object.entries(this.errorDictionary)
      .filter(([_, value]) => value)
      .filter(([key, _]) => !!this.messageMap[key])
      .map(([key, _]) => this.controlName + this.messageMap[key]);
  }

}
