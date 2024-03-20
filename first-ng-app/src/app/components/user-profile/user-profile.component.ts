import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name = "Ramesh"
  status = "single"
  salary = 40000
  isBtnDisabled = true
  isInput = "test"
  onChange(e: Event) {
    const value = (e.target as HTMLInputElement).value
    this.isInput = value
  }
}
