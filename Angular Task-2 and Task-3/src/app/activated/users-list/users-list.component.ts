import { Component, OnInit } from '@angular/core';
import { UserServicervService } from '../../services/user-servicerv.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  userList: any;
  constructor(private list: UserServicervService) { }
  show: boolean = false;
  ngOnInit(): void {
    this.userList = this.list.getUsers();
  }
}
