import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserForm } from './Components/user-form/user-form';



@NgModule({
  declarations: [
    UserForm
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UserForm
  ]
})
export class UsersModule {}