import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponentComponent} from './buy-component/buy-component.component';
import { CoursesWComponent} from './courses-w/courses-w.component';
import { MyCourseComponent } from './my-course/my-course.component';
import { ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path:'',component:CoursesWComponent},
  {path:'buyCourses',component:BuyComponentComponent},
  {path:'mycourse',component:MyCourseComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
