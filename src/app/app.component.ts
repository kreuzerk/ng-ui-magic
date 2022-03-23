import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public toggled = false;
  public messages = [
    'message one',
    'message two',
    'message three'
  ];
}
