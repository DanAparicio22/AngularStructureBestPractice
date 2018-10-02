import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any[] = [];

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe( (data: any) => {
        const users = data.users;
        users.forEach(user => {
          this.items.push(user);
        });
    });
  }

}
