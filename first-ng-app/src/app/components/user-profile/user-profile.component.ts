import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name = "Ramesh"
  status = "single"
  salary = 40000
  isBtnDisabled = true
  isInput = "test"

  users = [
    {name: "Akash", isSingle: true, salary: 60000},
    {name: "Suresh", isSingle: false, salary: 35000},
    {name: "Shruti", isSingle: true, salary: 40000}
  ]
}
