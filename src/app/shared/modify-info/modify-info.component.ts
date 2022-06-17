import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-info',
  templateUrl: './modify-info.component.html',
  styleUrls: ['./modify-info.component.scss']
})
export class ModifyInfoComponent implements OnInit {

  visible : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
