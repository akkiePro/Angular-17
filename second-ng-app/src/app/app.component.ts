import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserProfileComponent, CommonModule]
})
export class AppComponent {
  title = 'second-ng-app';

  users = [
    {name: "Naman", salary: 48000, isSingle: true},
    {name: "Manan", salary: 25000, isSingle: false},
    {name: "Chaman", salary: 15000, isSingle: true},
    {name: "Aman", salary: 90000, isSingle: false}
  ]
}
