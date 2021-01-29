import { EventEmitter, Injectable, Output, } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class CartService {
@Output() cart: EventEmitter<any>= new EventEmitter();

courses:any [];
out:any=0;
total:any = 0;

constructor() {
  this.courses = [];
  this.out= 0;
 }


 add(course:any){
  /* This section verify if course exists yet*/
  this.out =0;
  this.courses.push(course)
   this.courses.forEach((value:any)=>{
     if(value.key == course.key){
      this.out++;
     }
    });
    if(this.out==2) {this.courses.pop();}
    return this.out;
  
 }

get(){
  return this.courses;
}

clean(){
  this.courses = [];
}

delete(course:any){
  this.courses.forEach((value:any,index)=>{
    if(value.key == course.key){
      this.courses.splice(index, 1);
    }
});

}

totalPrice(){
  this.total=0;
  this.courses.forEach((element: any) => {
    this.total = this.total + element.Precio;
  });
  return this.total;
}
 
}
