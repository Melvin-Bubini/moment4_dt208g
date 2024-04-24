import { Component } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  userlist: User[] = [];

  constructor(private userservice : UserService) {}

  ngOnInit() {
    this.userservice.getUsers().subscribe(data => {
      this.userlist = data;
    })
  }
}
