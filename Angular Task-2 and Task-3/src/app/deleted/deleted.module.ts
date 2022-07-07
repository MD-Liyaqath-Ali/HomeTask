import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeletedRoutingModule } from './deleted-routing.module';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    DeletedRoutingModule
  ]
})
export class DeletedModule { }
