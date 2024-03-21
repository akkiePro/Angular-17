import { Component, EventEmitter, Input, Output, booleanAttribute, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Input({alias: 'userName'}) name!:string;
  @Input({transform:booleanAttribute}) isSingle!:boolean;
  @Input({transform:numberAttribute}) salary!:number;

  @Output() myEvent = new EventEmitter<string>();
  sendData() {
    this.myEvent.emit("Coders never quit.");
  }
}
