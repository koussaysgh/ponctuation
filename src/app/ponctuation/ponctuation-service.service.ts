import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Ponctuation } from './poctuation.model';


@Injectable({
  providedIn: 'root'
})
export class PonctuationServiceService {
  private url = 'http://localhost:8084/';  
  constructor(private http:HttpClient) { }


 
  
  getNumberPonctuation(ponctuation: Ponctuation): Observable<object> {  
    console.log(ponctuation);
    return this.http.post(`${this.url}`, ponctuation);  
  }  




}
