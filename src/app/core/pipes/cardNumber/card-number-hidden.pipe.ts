import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumberHidden'
})
export class CardNumberHiddenPipe implements PipeTransform {

  transform(number: number | undefined): string {
    let hideNum = [];
    let card = number + '';

    for(let i = 0; i < card.length; i++){
      if(i < card.length-4){
        hideNum.push("*");
      }else{
        hideNum.push(card[i]);
      }
    }
    return hideNum.join("");
  }

}
