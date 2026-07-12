import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users-module';



@NgModule({
  imports: [
    CommonModule,
    UsersModule
  ]
})
export class FeaturesModule {}
