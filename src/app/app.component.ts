import { Component } from '@angular/core';
import {Node, Edge} from './model/model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {}
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class SnackComponent {}
