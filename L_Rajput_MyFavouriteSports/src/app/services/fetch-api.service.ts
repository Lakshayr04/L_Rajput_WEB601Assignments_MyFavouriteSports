import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  constructor(private http:HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':'application/json' })
    };
  getContent():Observable<Content[]> {
    let data=this.http.get<Content[]>("api/content");
    return data;
}
}
