import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header: String = 'US Time Zone Display';
  time = new Date();
  lastTimeZoneSelected = null;

  getDateByZone(data){
    this.time = new Date();
    if (data === 'MST') {
      this.time.setHours(this.time.getHours() + 1);
    } else if (data === 'CST') {
      this.time.setHours(this.time.getHours() + 2);
    } else if (data === 'EST') {
      this.time.setHours(this.time.getHours() + 3);
    }
    this.lastTimeZoneSelected = data;
  }
  clear(){
    this.lastTimeZoneSelected = null; 
  }

}
