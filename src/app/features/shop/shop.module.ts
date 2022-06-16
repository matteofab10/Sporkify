import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

const routes : Routes = [
  {path: '', component: ShopComponent}
]


@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports : [
    ShopComponent,
  ]
})
export class ShopModule { }
