import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../core/models/user";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input() userForm: FormGroup;
  @Input() user : User;
  @Input() visible : boolean = false;

  @Output() userEmitter: EventEmitter<User>  = new EventEmitter<User>()
  @Output() userEmitter1: EventEmitter<User>  = new EventEmitter<User>()
  @Output() userEmitter2: EventEmitter<User>  = new EventEmitter<User>()

  constructor() { }

  ngOnInit(): void {
  }

  sendUser(user : User){
    this.userEmitter.emit(user);
  }
}
