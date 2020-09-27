import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitCurrency'
})
export class UnitCurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: any[]): any {
    return null;
  }

}
