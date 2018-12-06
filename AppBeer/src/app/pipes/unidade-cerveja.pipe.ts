import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unidadeCerveja'
})
export class UnidadeCervejaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return null;
    }

    return (args[0] === 'L' ? value + 'L' : value + 'ml');
  }

}
