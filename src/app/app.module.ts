import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { BuyComponentComponent} from './buy-component/buy-component.component';
import { CartComponent} from './cart/cart.component';
import { CoursesWComponent} from './courses-w/courses-w.component';
import { NavbarComponent} from './navbar/navbar.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaPipe } from './prueba.pipe';
import {ModPipe} from './Pipes/mod.pipe';
import {NamePipe} from './Pipes/name.pipe';
import {TypPipe} from './Pipes/typ.pipe';
import { MyCourseComponent } from './my-course/my-course.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    BuyComponentComponent,
    CartComponent,
    CoursesWComponent,
    NavbarComponent,
    PruebaPipe,
    TypPipe,
    NamePipe,
    ModPipe,
    MyCourseComponent,
    ProfileComponent,
    MainComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
