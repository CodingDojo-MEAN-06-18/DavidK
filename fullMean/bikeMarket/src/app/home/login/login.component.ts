import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  errors: string[] = [];

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(user: User) {
    this.auth.login(user).subscribe(() =>
      this.router.navigateByUrl('dashboard'));
  }

}
