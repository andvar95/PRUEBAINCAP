import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private userservice:UsersService) { }
  public Courses:Array<any> = [];
  user:any=[];
  buyVar:boolean = false;
  c:number= 0;
  log:boolean = false;

  ngOnInit(): void {

  
  }


  modalOpen(){
   this.buyVar= true; }

    modalClose(isClosed:boolean){
      this.buyVar= false;
      this.log = true;
      this.user = this.userservice.getcurrentUser();
      if(this.user == undefined || this.user == ''){
      this.log = false;
      console.log("entre" + this.user);
    }
    

    }

    logOut(){
      this.log = false;
      this.userservice.logOut();
      this.user = ['-'];
    }
}
