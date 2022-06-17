import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SummaryComponent } from './summary/summary.component';
import {PipesModule} from "../core/pipes/pipes.module";
import { DeleteMessageComponent } from './delete-message/delete-message.component';
import { ConfirmMessageComponent } from './confirm-message/confirm-message.component';
import { ModifyInfoComponent } from './modify-info/modify-info.component';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    CardComponent,
    SummaryComponent,
    DeleteMessageComponent,
    ConfirmMessageComponent,
    ModifyInfoComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
    exports: [
        CardComponent,
        SummaryComponent,
        DeleteMessageComponent,
        ModifyInfoComponent,
        ConfirmMessageComponent,
        LandingComponent,
    ]
})
export class SharedModule { }
