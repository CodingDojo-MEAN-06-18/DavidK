import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My Angular App';
  x: number = 73423423423423;
  y: number = 9234324234;
  myStr: string = "Check out my amazing string";
  today = new Date();
  loggedIn = true;
  numbers = [1,2,3,4,5];
  switch: boolean = true;
}
