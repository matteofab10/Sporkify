import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardNumberHiddenPipe } from './cardNumber/card-number-hidden.pipe';
import { PinNumberHiddenPipe } from './pinNumber/pin-number-hidden.pipe';



@NgModule({
  declarations: [
    CardNumberHiddenPipe,
    PinNumberHiddenPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardNumberHiddenPipe,
    PinNumberHiddenPipe,
  ]
})
export class PipesModule { }
