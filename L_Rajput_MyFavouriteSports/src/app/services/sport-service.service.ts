import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { sportsContent } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SportServiceService {

  constructor(private messageService: MessageService) { }
  getSport(): Observable<Content[]> {
    const result = of(sportsContent);
    this.messageService.add("Content array loaded!");
    return result;
  }
  getSingle(id: number): Observable<any> {
    const result = sportsContent.at(id);
    if (result) {
      this.messageService.add("Content Item at id: " + id);
      return of(result);

    } else {
      return of(sportsContent);
    }
  }
}
