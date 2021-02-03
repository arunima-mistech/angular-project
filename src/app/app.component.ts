import { Component } from '@angular/core';
import countries from './files/countries.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  countryList:{name:String,code:String}[]=countries;
  
}
