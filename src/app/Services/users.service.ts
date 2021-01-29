import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  Users:any [];
  currentUser:any;
  ok_log:boolean = false;

  constructor() {
    this.Users = [];
   }

   regUser(user:any){
     this.Users.push(user);
   }

   logUser(user:any){
    this.ok_log = false;
     this.Users.forEach((userdata:any)=>{
        if (user.pass == userdata.pass && user.name == userdata.name){
          this.ok_log = true;
        }
     });
     this.currentUser = user;
     return this.ok_log
   }

   getcurrentUser(){
     return this.currentUser;
   }

   logOut(){
    this.currentUser= [];
   }



}
