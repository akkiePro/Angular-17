import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  private _birthdate!: Date;

  @Input({alias: "userName"}) name!:string;
  @Input({transform: booleanAttribute}) isSingle!:string;
  @Input({transform: numberAttribute}) salary!:string;
  @Input() currencyCode!:string;
  @Input()
  public set birthdate(birthdate : string) {
    this._birthdate = new Date(birthdate);
  }
  public get birthdate() : Date {
    return this._birthdate;
  }
  @Input() skills!:string;
  
  

}
