import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {
  formUser!: FormGroup;

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
          Validators.pattern(/^\S*$/)
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
          Validators.min(18),
          Validators.max(100),
          Validators.pattern(/^[0-9]*$/)
        ]
      ],
      TerminosCondiciones: [
        { value: false, disabled: false },
        [
          Validators.requiredTrue
        ]
      ]
    });
  }
}