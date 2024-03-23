import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fourth-ng-app';
  users = [
    {name: "aman", isSingle: true, salary: 25000},
    {name: "naman", isSingle: false, salary: 55000},
    {name: "manan", isSingle: true, salary: 35000}
  ]
}
