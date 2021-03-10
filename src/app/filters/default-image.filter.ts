import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'defaultImage'})
export class defaultImagePipe implements PipeTransform {
  transform(input, param): string {
    if (!param) {
      param = 'src/img/avatar.png';
    }
    if (!input) {
      return param
    }

    return input
  }
}
