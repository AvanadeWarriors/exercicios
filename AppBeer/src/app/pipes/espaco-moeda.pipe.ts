import { Pipe, PipeTransform } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Pipe({
  name: 'espacoMoeda'
})
export class EspacoMoedaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace('$', '$ ');
  }

}
