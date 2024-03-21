import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

let i = 1;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  receiveData(e: string) {
    console.log(e);
    const textByOutputDecorator = document.createElement("p");
    textByOutputDecorator.setAttribute('id', 'textByInputDecorator' + i);
    ++i;
    textByOutputDecorator.innerHTML = e;
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentElement('beforeend', textByOutputDecorator);
  }

  title = 'third-ng-app';
}
