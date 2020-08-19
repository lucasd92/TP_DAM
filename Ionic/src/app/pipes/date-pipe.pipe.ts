import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipe implements PipeTransform {

  transform(value: String): String {
    var year = value.slice(0, 4);
    var month = value.slice(5, 7);
    var day = value.slice(8,10);
    var hour = value.slice(11, 13);
    var min = value.slice(14, 16);
    var sec = value.slice(17,19);

    return `${day}/${month}/${year} ${hour}:${min}:${sec}` ;
  }

}
