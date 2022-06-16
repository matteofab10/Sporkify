import {Component, Input, OnInit} from '@angular/core';
import {Abbonamento} from "../../core/models/abbonamento";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() listAbbonamenti : Abbonamento[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
