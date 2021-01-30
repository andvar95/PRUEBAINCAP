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
  msj:any =[];

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
    this.msj = "";
    if (this.reg == true){
      if(this.userservice.checknewUser(f.value)==1)
      {
        this.msj = "Usuario ya exista intente otro correo o apodo";
      }
      else if(this.userservice.checknewUser(f.value)==0){ 
    this.userservice.regUser(f.value);
    console.log("registrado" +f.value);
    this.login();
  }
  }
  else if (this.ses == true){
        if(this.userservice.logUser(f.value)==1){
      this.user = this.userservice.getcurrentUser();
          this.closeModal();
    }

    else if(this.userservice.logUser(f.value)==0){
      this.msj = "Usuario No registrado";
    }
    else if(this.userservice.logUser(f.value)==2){
      this.msj = "Contraseña Erronea";
    }
    
  
    
  }
    }
}
