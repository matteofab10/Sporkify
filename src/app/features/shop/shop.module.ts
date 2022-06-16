import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {PipesModule} from "../../core/pipes/pipes.module";

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
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        PipesModule
    ],
  exports : [
    ShopComponent,
  ]
})
export class ShopModule { }
