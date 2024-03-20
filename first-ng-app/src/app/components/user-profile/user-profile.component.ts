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
  // isBtnDisabled = false
}
