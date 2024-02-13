import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'sortType',
  standalone: true
})
export class SortTypePipe implements PipeTransform {

  transform(sportsContent: Content[],types?: string) {
    return sportsContent.filter(c=> c.type === types? c.type?.length:null);
  }
}
