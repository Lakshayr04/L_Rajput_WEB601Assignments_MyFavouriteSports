import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';
import { sportsContent } from '../helper-files/contentDb';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
    
   }
  createDb() {
    let content: Content[] = sportsContent;
    return { content };
  }
  genId(content: Content[]): number {
    return content.length > 0 ? Math.max(content.findIndex((c)=>c.id)) + 1 : 2000;
    
  }
  // getContent():Observable<Content[]>{
  //   return this.http.get<Content[]>("/api/sportContent");
  // }

}
