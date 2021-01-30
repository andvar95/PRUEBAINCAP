import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  Users:any [];
  currentUser:any;
  ok_log:number = 0;

  constructor() {
    this.Users = [];
   }

   regUser(user:any){
     this.Users.push(user);
   }

   logUser(user:any){
    this.ok_log = 0;
     this.Users.forEach((userdata:any)=>{
        if (user.name == userdata.name){
          if (user.pass == userdata.pass ){
          this.ok_log = 1;}
          else{
            this.ok_log = 2;
          }
        }
     });
     this.currentUser = user;
     return this.ok_log
   }

   checknewUser(user:any){
    this.ok_log = 0;
     this.Users.forEach((userdata:any)=>{
        if (user.email == userdata.email || user.name == userdata.name){
          this.ok_log = 1;
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
