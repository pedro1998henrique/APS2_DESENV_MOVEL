import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL =  environment.API_URL;
const API_KEY =  environment.API_Key;
@Injectable({
  providedIn: 'root'
})
export class News2FeedsService {

  constructor(private http:HttpClient) { }

  getNews(url){
    return this.http.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-28&sortBy=publishedAt&apiKey=72922e3603364ba5b402fa876feaa03e')
  }
}
