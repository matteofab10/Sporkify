import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pinNumberHidden'
})
export class PinNumberHiddenPipe implements PipeTransform {

  transform(number: number | undefined): string {
    let hidePin = [];
    let pin = number + '';

    for(let i = 0; i < pin.length; i++){
      if(i < pin.length-1){
        hidePin.push("*");
      }else{
        hidePin.push(pin[i]);
      }
    }
    return hidePin.join("");
  }

}
