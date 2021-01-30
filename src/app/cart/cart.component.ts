import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UsersService} from '../Services/users.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 @Input()CoursestoBuy: any;
 @Output()onClose:EventEmitter<boolean> = new EventEmitter();
  constructor(private userservice:UsersService) { }
  reg:boolean= false;
  ses:boolean= true;
  user:any = [];

  ngOnInit(): void {

    this.login();
   
  }

  login(){
    this.reg = false;
    this.ses= true;
    document.getElementById('Ses').style.background = "deepSkyBlue";
    document.getElementById('Reg').style.background ="lightGray";
    
  }
  register(){
    this.reg = true;
    this.ses= false;
    document.getElementById('Ses').style.background ="lightGray";
    document.getElementById('Reg').style.background ="deepSkyBlue";
  }

  closeModal(){
    this.onClose.emit(true);
  }

  onSubmit(f: NgForm) {
    if (this.reg == true){
    this.userservice.regUser(f.value);
    console.log("registrado" +f.value);
    this.login();
  }
  else if (this.ses == true){
        if(this.userservice.logUser(f.value)==true){
      this.user = this.userservice.getcurrentUser();
          this.closeModal();
    }
    
  
    
  }
    }
}
