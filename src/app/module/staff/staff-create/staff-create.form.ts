import {FormGroup, ValidatorFn, AbstractControlOptions, FormControl, Validators} from '@angular/forms';

export class StaffCreateForm extends FormGroup {

  private validate = false;

  constructor(validator?: ValidatorFn | AbstractControlOptions ) {
    super(
      {
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        staffTypeId: new FormControl('', [Validators.required]),
      },
      validator
    );
  }

  public isValidate(): boolean {
    return this.validate;
  }

  public enableValidator(): void {
    this.validate = true;
  }

  public disableValidator(): void {
    this.validate = false;
  }

  get firstName(): string { return this.get('firstName').value; }

  public setFirstName(firstName: string, noValid: boolean = false): void {
    if (noValid) {
      this.get('firstName').patchValue(firstName, { onlySelf: true, emitEvent: false });
    } else {
      this.get('firstName').patchValue(firstName);
    }
  }

  get lastName(): string { return this.get('lastName').value; }

  public setLastName(lastName: string, noValid: boolean = false): void {
    if (noValid) {
      this.get('lastName').patchValue(lastName, { onlySelf: true, emitEvent: false });
    } else {
      this.get('lastName').patchValue(lastName);
    }
  }

  get email(): string { return this.get('email').value; }

  public setEmail(email: string, noValid: boolean = false): void {
    if (noValid) {
      this.get('email').patchValue(email, { onlySelf: true, emitEvent: false });
    } else {
      this.get('email').patchValue(email);
    }
  }

  get staffTypeId(): string { return this.get('staffTypeId').value; }

  public setstaffTypeId(staffTypeId: string, noValid: boolean = false): void {
    if (noValid) {
      this.get('staffTypeId').patchValue(staffTypeId, { onlySelf: true, emitEvent: false });
    } else {
      this.get('staffTypeId').patchValue(staffTypeId);
    }
  }

}
