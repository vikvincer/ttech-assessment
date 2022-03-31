import { Component } from '@angular/core';
import { navListConfig } from './models/nav.config';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navListConfig = navListConfig;
}
