import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_get : string = "http://localhost:3000/posts";

  constructor(private http: HttpClient) { }

  getChartInfo(){
    return this.http.get(this.API_get)
  }
}
