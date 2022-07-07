import { Injectable } from '@angular/core';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {
    console.log("in UsersService");
  }
  static users: User[] = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      login: 'johndoe',
      password: 'joh****',
      isDeleted: true
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Doe',
      age: 25,
      login: 'janedoe',
      password: 'jan****',
      isDeleted: false
    },
    {
      id: '3',
      firstName: 'Jack',
      lastName: 'Doe',
      age: 20,
      login: 'jackdoe',
      password: 'jac****',
      isDeleted: false
    },
    {
      id: '4',
      firstName: 'Leanne',
      lastName: 'Graham',
      age: 15,
      login: 'leannegraham',
      password: 'lea****',
      isDeleted: false
    },
    {
      id: '5',
      firstName: 'Patricia',
      lastName: 'Lebsack',
      age: 23,
      login: 'patlebsack',
      password: 'pat****',
      isDeleted: false
    }
  ];

  static getActiveUsers(): User[] {
    return this.users.filter((user: User) => !user.isDeleted);
  }

  static getDeletedUsers(): User[] {
    return this.users.filter((user: User) => user.isDeleted);
  }


  static setActivation(id: string, isDeleted: boolean) {
    const userId = this.users.findIndex((user: User) => user.id === id);
    this.users[userId].isDeleted = isDeleted;
    console.log("service", this.users);
  }
}