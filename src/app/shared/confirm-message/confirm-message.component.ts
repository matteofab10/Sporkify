import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../core/models/user";

@Component({
  selector: 'app-confirm-message',
  templateUrl: './confirm-message.component.html',
  styleUrls: ['./confirm-message.component.scss']
})
export class ConfirmMessageComponent implements OnInit {

  @Output() userEmitter2: EventEmitter<User>  = new EventEmitter<User>()

  constructor() { }

  ngOnInit(): void {
  }

  sendUser(user : User){
    this.userEmitter2.emit(user);
  }

}
