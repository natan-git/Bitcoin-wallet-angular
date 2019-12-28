import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  userName=''
  loggedInUser=''
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loggedInUser=this.userService.getUser()
    console.log('this.loggedInUser',this.loggedInUser);
  }

  addUser(event: Event) {
    // console.log(event);
    this.userService.signUp(event);
    this.loggedInUser=this.userService.getUser()
  }

}
