import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validacion } from '../validators/validacion';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {
  formUser!: FormGroup;
  datosUsuario:any;

  constructor(private fb: FormBuilder) {
    this.formUser = this.fb.group({
      Nombre: [
        { value: null, disabled: false },
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/)
        ]
      ],
      Correo: [
        { value: null, disabled: false },
        [
          Validators.required,
          Validators.email
        ]
      ],
      Usuario: [
        { value: null, disabled: false },
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern(/^[a-zA-Z0-9_]+$/)
        ]
      ],
      Contraseña: [
        { value: null, disabled: false },
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W]{7,}$/)
        ]
      ],
      ConfirmarContraseña: [
        { value: null, disabled: false },
        [
          Validators.required
        ]
      ],
      Edad: [
        { value: null, disabled: false },
        [
          Validators.required,
          Validators.min(15),
          Validators.max(90),
          Validators.pattern(/^[0-9]*$/)
        ]
      ],
      TerminosCondiciones: [
        { value: false, disabled: false },
        [
          Validators.requiredTrue
        ]
      ]
    }, {
      validators: Validacion.iguales(
        'Contraseña',
        'ConfirmarContraseña'
      )
    })
  };

  cerrarResultado() {
    this.datosUsuario = null;
  }

  onClick() {
    if (this.formUser.valid) {
      this.datosUsuario = this.formUser.value;
      this.formUser.reset();
    } else {
      console.log(this.formUser.errors)
    }
  }

  hasError(campo: string, codeError: string) {

    const campoform = this.formUser.get(campo);
    const error = campoform?.hasError(codeError);
    const dirty = campoform?.dirty;
    const touched = campoform?.touched;
    return error && dirty && touched;
  }
}