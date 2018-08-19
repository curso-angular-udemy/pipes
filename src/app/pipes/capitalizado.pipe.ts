import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {
    
    return todas?value.toLowerCase().split(" ").map(e=>e[0].toUpperCase()+e.slice(1)).join(" "):
    value[0].toUpperCase()+value.slice(1).toLocaleLowerCase();
  }

}
