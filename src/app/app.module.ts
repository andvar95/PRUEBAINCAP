import { NgModule } from '@angular/core';
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
    ModPipe
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
