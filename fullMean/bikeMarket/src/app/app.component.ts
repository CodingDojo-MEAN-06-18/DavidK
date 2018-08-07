import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loggedIn: boolean;

  constructor (
    private readonly auth: AuthService,
    private readonly router: Router
  ) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.auth.authorizedI.subscribe(authed => (this.loggedIn = authed));
  }

}
