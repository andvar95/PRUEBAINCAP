import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponentComponent} from './buy-component/buy-component.component';
import { CoursesWComponent} from './courses-w/courses-w.component';

const routes: Routes = [
  {path:'courses',component:CoursesWComponent},
  {path:'buyCourses',component:BuyComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
