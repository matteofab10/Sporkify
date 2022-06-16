import { Component, OnInit } from '@angular/core';
import {Abbonamento} from "../../core/models/abbonamento";
import {User} from "../../core/models/user";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  listAbbonamenti: Abbonamento[] = [
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

  userForm: FormGroup | undefined;
  user : User | undefined;
  name: any;

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup(){
      name: new FormControl(''),
      surname: new FormControl(''),
      cardNumber: new FormControl(''),
      expiration: new FormControl(''),
      cardPin: new FormControl('')
    }
  }

  manageSubscription() {

  }
}
