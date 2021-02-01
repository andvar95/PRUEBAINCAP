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
currerCourse = [];
hor1:string[]=[];
hor2:string[]=[];
cross:any = 0;
crossEna:boolean=true;
myCourses:any = [];

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

setCurrentCourse(course:any){
this.currerCourse = course;
}

getCurrentCourse(){
  return this.currerCourse;
  }
  crossSchedule(course:any){
    this.crossEna = true;
    if(this.get().length>0)//if cart is empty don't verify
    {
    Object.entries(this.get()).forEach(
      ([keys,dict]:any) => {
        Object.entries(dict.Schedule).forEach(([day,sche]:any)=>{
          for(let courseSc in course.Schedule){
            if((course.key != dict.key) && (course.Schedule[courseSc].split("-")[0] == sche.split("-")[0])){
              this.hor1=course.Schedule[courseSc].split("-");
              this.hor2=sche.split("-");              
                for(let h1 of this.hor1){
                  for(let h2 of this.hor2){
                    if (h1 ==h2){
                     this.cross++;
                    }}}
                if(this.cross >=3){
                
                  //this.sleepMsj("Cruce de horarios con "+dict.title,course)
                    this.cross=0;
                    this.crossEna = false;
                    
                  }}}
        });
  
  });}
  return this.crossEna;
  }

setMyCourses(courses:any){
  courses.forEach(element => {
    this.myCourses.push(element);
  });
}

getMyCourses(){
  return this.myCourses;
}

}
