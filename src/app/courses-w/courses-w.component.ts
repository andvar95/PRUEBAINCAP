import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {CartService} from '../Services/cart.service'
import {UsersService} from '../Services/users.service';

@Component({
  selector: 'app-courses-w',
  templateUrl: './courses-w.component.html',
  styleUrls: ['./courses-w.component.css']
})
export class CoursesWComponent implements OnInit {
  modalities:string [];
  typecourses:string [];
  filterName:string = '';
  filterMod:string = '';
  filterType:string = '';  
  ModalitySelected:any = '0';
  TypeCourseSelected:any = '0';
  variable:any=0;
  add:any = 0;
  hor1:string[]=[];
  hor2:string[]=[];
  cross:any = 0;
  crossEna:boolean=true;
  user:any = ['-','-'];



   //======= DUMMY DATA =========//
  courses = [
    {
      "id": 1,
      "key":"Py_D_A",
      "title": "Python",
      "type": "Diplomado",
      "Modality":"Sincrona",
      "Schedule":{
        "Day1":"Lunes-16-17-18",
        "Day2":"Jueves-17-18-19",
      },
      "Precio":25000
    },
    {
      "id": 2,
      "key":"Py_D_S",
      "title": "Python",
      "type": "Diplomado",
      "Modality":"Asincrona",
      "Schedule":"",
      "Precio":50000
    },
    {
      "id": 3,
      "key":"Jar_S_S",
      "title": "Java",
      "type": "Seminario",
      "Modality":"Sincrona",
      "Schedule":{
        "Day1":"Martes-16-17-18",
        "Day2":"Jueves-8-9-10",
      },
      "Precio":14000
    },
    {
      "id": 4,
      "key":"Cul_C_A",
      "title": "Culinaria",
      "type": "Curso Corto",
      "Modality":"Asincrona",
      "Schedule":"",
      "Precio":34000
      
  
    },
    {
      "id": 5,
      "key":"De_D_S",
      "title": "Diseño Electrónico",
      "type": "Diplomado",
      "Modality":"Sincrona",
      "Schedule":{
        "Day1":"Lunes-9-10-11",
        "Day2":"Jueves-17-18-19",
      },
      "Precio":15000

    }
  ]; 


  constructor(private cartservice: CartService, private userservice:UsersService) {
   this.modalities = ['Sincrona','Asincrona'];
   this.typecourses = ['Diplomado','Seminario','Curso Corto'];
}


  getUser(){
    console.log("usuariio "+this.userservice.getcurrentUser());
    this.user = this.userservice.getcurrentUser(); 
    if(this.user == undefined ||this.user == ''  ){
      this.user = ["-"];
    } 
 
  }
  ngOnInit(): void {
    this.getUser()
     }

  ngAfterContentChecked(){
    this.getUser()
  }

  addCart(course:any){
    this.getUser()
      if(this.user != "-"){
        if(this.crossSchedule(course)==true)
        { 
          this.add = this.cartservice.add(course);
          if(this.add==2){
            alert("Este curso ya ha sido agregado") }
        }
      }
      
    else if (this.user == "-") {  
      alert("Debo Iniciar sesión");
    }
    
   
  }

  
 

  


  crossSchedule(course:any){
    this.crossEna = true;
    if(this.cartservice.get().length>1){
    Object.entries(this.courses).forEach(
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
                  alert("Cruce de horarios");
                    this.cross=0;
                    this.crossEna = false;
                    
                  }}}
        });
  
  });}
  /*Send the data to service */
  return this.crossEna;
  }

  


  
}
