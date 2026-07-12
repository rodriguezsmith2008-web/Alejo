import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export class Validacion extends Validators {

    static iguales(password1: string, password2: string): ValidatorFn {

        return (group: AbstractControl): ValidationErrors | null => {

            const primero = group.get(password1);
            const segundo = group.get(password2);

            if (primero?.value === segundo?.value) {
                return null;
            }

            return { noCoincide: true };
        };
    }
}