import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoutingModule } from './activated-routing.module';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    ActivatedRoutingModule
  ]
})
export class ActivatedModule { }
