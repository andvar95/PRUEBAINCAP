import { Component,  OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { UsersService} from '../Services/users.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-buy-component',
  templateUrl: './buy-component.component.html',
  styleUrls: ['./buy-component.component.css']
})
export class BuyComponentComponent implements OnInit {
  public Courses:Array<any> = [];
  total:any = 0;
  c:number= 0;
  user:any = [];
  payOpt:string = '0';
  paySel:string = ''; 
  bankOpt:string = '0';
  bankSel:string = ''; 
  cards:boolean = false;
  pse:boolean = false;
  paymentOpt:any = ["Tarjeta Debito/Credito","PSE","Efecty"]
  banksOpt:any = ["Bancolombia","AVvillas","Banco de Bogotá"]



  constructor(private cartservice: CartService, private userservice: UsersService) { }

  getUser(){
    console.log(this.userservice.getcurrentUser());
    this.user = this.userservice.getcurrentUser(); 
    if(this.user == undefined ||this.user == ''){
      this.user = ["-"];
      this.cartservice.clean();
      this.Courses = this.cartservice.get();
      this.total = this.cartservice.totalPrice();
    
    } 
 
  }

  ngAfterContentChecked(){
    this.getUser()
  }
  ngOnInit(): void {
    this.Courses = this.cartservice.get();
    this.total = this.cartservice.totalPrice();
    this.user = this.userservice.getcurrentUser(); 
    this.getUser(); 
  }


  clean(){
    this.cartservice.clean();
    this.Courses = this.cartservice.get()
    this.total = this.cartservice.totalPrice();
  }

  delete(course:any){
    this.cartservice.delete(course);
    this.cartservice.get();
    this.total = this.cartservice.totalPrice();

  }
 
  SelectPay(){
    this.paySel = this.payOpt;
    if (this.paySel == this.paymentOpt[0]){
      this.cards=true;
      this.pse=false;
    }
    else if(this.paySel == this.paymentOpt[1]){
      this.pse = true;
      this.cards=false;
    }
  }

  SelectBank(){
    this.bankSel = this.bankOpt;
  }

  onSubmit(f: NgForm) {
    console.log(f.value+ " "+this.Courses);
  this.cartservice.setMyCourses(this.cartservice.get());
  this.cartservice.clean()
  this.Courses = this.cartservice.get()
  this.total = this.cartservice.totalPrice();
   }
}
