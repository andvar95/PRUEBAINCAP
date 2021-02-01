import { Component, OnInit } from '@angular/core';
import { CartService} from '../Services/cart.service';
import { UsersService} from '../Services/users.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.css']
})
export class MyCourseComponent implements OnInit {
   course:any=[];
   hor1:string[]=[];
   hor2:string[]=[];
   cross:any = 0;
   crossEna:boolean=true;
   user:any = ['-','-'];
   msj:string='';
   add:any = 0;
  constructor(private cartservice :CartService, private userservice: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.course = this.cartservice.getCurrentCourse();
    this.getUser()

}


ngAfterContentChecked(){
  this.getUser()
}


getUser(){
  console.log("usuariio "+this.userservice.getcurrentUser());
  this.user = this.userservice.getcurrentUser(); 
  if(this.user == undefined ||this.user == ''  ){
    this.user = ["-"];
  } 

}


addCart(course:any){
  this.msj = "";
  this.getUser()
    if(this.user != "-"){

      if(this.crossSchedule(course)==true){ 
        this.add = this.cartservice.add(course);
         if(this.add==2){  
          this.sleepMsj(course.title+" Ya ha sido agregado",course);
        }
        else{
        this.router.navigate(['/buyCourses']);
      }
      }
      
    }
    
  else if (this.user == "-" || this.user == undefined ) {  

    this.sleepMsj("Debe Iniciar sesión",course)       
  }
  
}

crossSchedule(course:any){
  this.crossEna = true;
  if(this.cartservice.get().length>0)//if cart is empty don't verify
  {
  Object.entries(this.cartservice.get()).forEach(
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
              
                this.sleepMsj("Cruce de horarios con "+dict.title,course)
                  this.cross=0;
                  this.crossEna = false;
                  
                }}}
      });

});}
return this.crossEna;
}

private async sleepMsj(msj:string,course:any){
  course.msj = msj;
  await this.delay(20000);
  course.msj = "";
}

private delay(ms: number)
{
return new Promise(resolve => setTimeout(resolve, ms));
}

}
