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
    {
      name: "aman", 
      isSingle: true, 
      salary: 25000,
      currencyCode: 'EUR', 
      birthdate: "2000, 7, 14", 
      skills: "Java, C++, C#",
    },
    {
      name: "naman", 
      isSingle: false, 
      salary: 55000,
      currencyCode: '',
      birthdate: "2001, 3, 24", 
      skills: "python, .net, php, react"
    },
    {
      name: "manan", 
      isSingle: true, 
      salary: 35000,
      currencyCode: 'USD', 
      birthdate: "2004, 12, 18", 
      skills: "Java, android, typescript, angular"
    }
  ]
}
