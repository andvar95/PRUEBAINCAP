import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { UsersService} from '../Services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any = [];
  Courses:any =[];
  constructor(private cartservice: CartService, private userservice: UsersService) { }

  ngOnInit(): void {
    this.user = this.userservice.getcurrentUser(); 
    this.Courses = this.cartservice.getMyCourses();
  }



}
