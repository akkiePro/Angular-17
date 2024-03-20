import { Component, Input } from '@angular/core';

function formatName(value: string): string {
  return "Hi " + value
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Input({alias: "userName", transform: formatName}) name = ""
}
