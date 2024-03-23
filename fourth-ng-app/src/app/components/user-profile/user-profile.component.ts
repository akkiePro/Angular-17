import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Input({alias: "userName"}) name!:string;
  @Input({transform: booleanAttribute}) isSingle!:string;
  @Input({transform: numberAttribute}) salary!:string;

}
