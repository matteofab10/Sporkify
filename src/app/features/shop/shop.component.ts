import {Component, EventEmitter, OnInit} from '@angular/core';
import {Abbonamento} from "../../core/models/abbonamento";
import {User} from "../../core/models/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  listAbbonamenti: Abbonamento[] = []
  userForm: FormGroup;
  user : User;
  visible : string;

  userEmitter: EventEmitter<User>  = new EventEmitter<User>()
  userEmitter1: EventEmitter<User>  = new EventEmitter<User>()
  userEmitter2: EventEmitter<User>  = new EventEmitter<User>()
  form: string = 'form';
  confirm: string = 'confirm';
  delete: string = 'delete';
  modify: string = 'modify';

  constructor() { }

  ngOnInit(): void {
    this.listAbbonamenti = [
      {
        name: "Basic",
        cost: 7.99,
        amount: 1
      },
      {
        name: "Premium",
        cost: 12.99,
        amount: 3
      },
      {
        name: "Family",
        cost: 19.99,
        amount: 6
      }
    ];


    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      cardNumber: new FormControl('', [Validators.required, Validators.minLength(19), Validators.maxLength(19)]),
      expiration: new FormControl('', [Validators.required]),
      cardPin: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      subscriptionType: new FormControl('', [Validators.required]),
      subscriptionTime: new FormControl('', [Validators.required])
    })
  }

  manageSubscription(userForm: FormGroup) {
    this.visible = 'form';
    const newUser = userForm.value as User;
    this.user = {...newUser};
    userForm.reset();
  }

  editUser($event: User) {
    this.visible = this.modify
    this.userForm.patchValue(this.user)
    this.userEmitter.emit($event)
  }

  deleteUser($event: User) {
    this.visible = this.delete
    this.userEmitter1.emit($event)
  }

  confirmUser($event: User) {
    this.visible = this.confirm
    this.userEmitter2.emit($event)
  }
}
