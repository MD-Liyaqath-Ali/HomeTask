import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListsComponent} from './user-lists/user-lists.component'; 

const routes: Routes = [
  {
    path:'userlist',
    component:UserListsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
