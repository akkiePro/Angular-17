import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Output() myEvent = new EventEmitter<string>();
  sendData() {
    this.myEvent.emit("Coders never quit.");
  }
}
