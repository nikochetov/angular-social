import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css'],
})
export class UserAccountComponent implements OnInit {
  currentUser: User;

  constructor(private authService: AuthService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  img = `https://picsum.photos/750/600?random&t=${Math.random()}`;
  imgAvatar = `https://picsum.photos/40/40?random&t=${Math.random()}`;

  ngOnInit(): void {
  }

}
