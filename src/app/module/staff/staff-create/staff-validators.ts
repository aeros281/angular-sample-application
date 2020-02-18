import { ValidatorFn, ValidationErrors } from '@angular/forms';
import { StaffCreateForm } from './staff-create.form';


export function sensitiveFullName(): ValidatorFn {
  return (group: StaffCreateForm): ValidationErrors => {
    const fullName: string = group.firstName + ' ' + group.lastName;
    console.log(fullName);
    if (fullName === 'The Chosen One') {
      return {
        sensitiveNmae: { value: 'Full name is not sensitive' }
      };
    }

    return null;
  };
}
