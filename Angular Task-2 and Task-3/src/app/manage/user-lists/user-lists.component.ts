import { Component, OnInit } from '@angular/core';

import { UserServicervService } from 'src/app/services/user-servicerv.service';
@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {

  userList: any;
 
  constructor(private list:UserServicervService) { }
  show:boolean = false;
  ngOnInit(): void {
    this.userList = this.list.getUsers();
    
  
  }

  selectedUser?: any;
onSelect(user: any): void {
  this.selectedUser = user;
}

}
