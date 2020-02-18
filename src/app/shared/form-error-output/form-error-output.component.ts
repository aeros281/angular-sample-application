import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

function isFormGroup(control: AbstractControl): control is FormGroup {
  return !!( <FormGroup>control ).controls;
}

function collectErrors(control: AbstractControl): any | null {

  if (control.pristine && !control.touched) { return []; }

  if (isFormGroup(control)) {
    return Object.entries(control.controls)
      .reduce((acc, [key, childControl]) => {
        const childErrors = collectErrors(childControl);

        if (childErrors) {
          acc = { ...acc, [key]: childErrors };
        }

        return acc;
      }, null);
  } else {
    return control.errors;
  }
}

@Component({
  selector: 'app-form-error-output',
  templateUrl: './form-error-output.component.html',
  styleUrls: ['./form-error-output.component.scss']
})
export class FormErrorOutputComponent implements OnInit, OnChanges {

  @Input() form: AbstractControl;
  errorList: {[key: string]: any};

  constructor() { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => this.updateErrorList());
  }

  ngOnChanges() {
    this.updateErrorList();
  }

  updateErrorList() {
    this.errorList = collectErrors(this.form);
  }

}
