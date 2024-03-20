import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  // instead of creating new HTML file, we can write html code in template also.
  template: `
  <h1>Hello world from TS.</h1>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-ng-app';
}
