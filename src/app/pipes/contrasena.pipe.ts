import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, ocultar: boolean): any {
    return ocultar?value.replace(/./g, '*'):value;
  }

}
