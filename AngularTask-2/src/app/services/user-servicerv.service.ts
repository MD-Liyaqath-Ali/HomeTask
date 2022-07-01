import { Injectable } from '@angular/core';
import { users } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServicervService {
  userList: Array<users> = ([

    { "id": "One User", "firstName": "One", "lastName": "User", "age": 1, "login": "User1", "password": "YsmkaD", "isDeleted": false },
    { "id": "Two User", "firstName": "Two", "lastName": "User", "age": 2, "login": "User2", "password": "Ihusjba", "isDeleted": true },
    { "id": "Three User", "firstName": "Three", "lastName": "User", "age": 3, "login": "User3", "password": "SMKabb", "isDeleted": true },
    { "id": "Four User", "firstName": "Four", "lastName": "User", "age": 4, "login": "User4", "password": "ASjbss", "isDeleted": false },
    { "id": "Five User", "firstName": "Four", "lastName": "User", "age": 5, "login": "User5", "password": "Ajv7AJS", "isDeleted": true },
    { "id": "Six User", "firstName": "Six", "lastName": "User", "age": 6, "login": "User6", "password": "asJHASf", "isDeleted": false },
    { "id": "Seven User", "firstName": "Seven", "lastName": "User", "age": 7, "login": "User7", "password": "ASjgsdw", "isDeleted": false },
    { "id": "Eight User", "firstName": "Eight", "lastName": "User", "age": 8, "login": "User8", "password": "ASkwdga", "isDeleted": false },
    { "id": "Nine User", "firstName": "Nine", "lastName": "User", "age": 9, "login": "User9", "password": "Qbsana", "isDeleted": false },
    { "id": "Ten User", "firstName": "Ten", "lastName": "User", "age": 10, "login": "User10", "password": "ASiubav", "isDeleted": false },
    { "id": "Eleven User", "firstName": "Eleven", "lastName": "User", "age": 11, "login": "User11", "password": "Asqgsb", "isDeleted": false },
    { "id": "Twelve User", "firstName": "Twelve", "lastName": "User", "age": 12, "login": "User12", "password": "asIyqG86", "isDeleted": true },
    { "id": "Thirteen User", "firstName": "Thirteen", "lastName": "User", "age": 13, "login": "User12", "password": "ASkqhba", "isDeleted": false },
    { "id": "Fourteen User", "firstName": "Fourteen", "lastName": "User", "age": 14, "login": "User14", "password": "aSkqhvas", "isDeleted": false },
    { "id": "Fifteen User", "firstName": "Fifteen", "lastName": "User", "age": 15, "login": "User15", "password": "aSkqhvas", "isDeleted": true },

  ])

  constructor() { }
  getUsers() {
    return this.userList
  }
  getUsersByID(id: String) {
    return this.userList.find(x => x.id === id)
  }



}
