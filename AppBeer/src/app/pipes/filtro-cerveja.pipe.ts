import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCerveja'
})
export class FiltroCervejaPipe implements PipeTransform {

  transform(item: any[], value: string): any[] {
    console.log(item);
    if (!item) { return []; }
    if (value) {
      // tslint:disable-next-line:no-shadowed-variable
      return item.filter(item => {
        return item.nome.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1;
      });
    } else {
      return item;
    }
  }

}
