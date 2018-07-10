import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  header: String = 'Retro Barcode Generator';

  colors: Array<String> = [
    'pink',
    'red',
    'yellow',
    'orange',
    'blue',
    'purple',
    'DarkBlue',
    'green',
    'brown',
    'Chartreuse'
  ]

  random(){
    return Math.floor(Math.random() * this.colors.length);
  }

}
