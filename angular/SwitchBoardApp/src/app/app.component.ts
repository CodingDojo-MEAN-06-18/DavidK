import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Switchboard';
  
  switches: Boolean[] = [true,true,true,true,true,true,true,true,true,true];
  
  flipswitch(i){
    this.switches[i] = !this.switches[i];
  }
 
 
}

