import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  registrationErrors: string[] = [];

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(user: User) {
    this.auth.register(user).subscribe(() => {
      this.router.navigateByUrl('dashboard');
    });
  }

}
