import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-lte';
  currenLocation: string = '';

  constructor(private location: Location) { 
    console.log(this.location.path());
    this.currenLocation = this.location.path();
  }
}
