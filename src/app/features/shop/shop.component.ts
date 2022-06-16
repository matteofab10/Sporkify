import { Component, OnInit } from '@angular/core';
import {Abbonamento} from "../../core/models/abbonamento";
import {User} from "../../core/models/user";
import {FormControl, FormGroup, MinLengthValidator, Validators} from "@angular/forms";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  listAbbonamenti: Abbonamento[] = []
  userForm: FormGroup;
  user : User;

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
    const newUser = userForm.value as User;
    this.user = {...newUser};
    userForm.reset();
  }
}
