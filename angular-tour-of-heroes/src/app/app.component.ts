import { Component } from '@angular/core';

// decorator to annotate a component class
// selector: Component's CSS element selector
// templateUrl: Location of component's template file
// styleUrls: location of component's private CSS styles
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
