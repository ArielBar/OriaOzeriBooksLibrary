import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeOnlyLetters'
})
export class CapitalizeOnlyLettersPipe implements PipeTransform {
  newValue: any;
  transform(value: any) {
    if (value) {
      this.newValue = value.replace(/[^a-zA-Z ]/g, "");
      console.log(this.newValue);
      return this.newValue.split(' ').map(s => s != ' ' ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : s).join(' ');

    }
    return value;
  }

}



