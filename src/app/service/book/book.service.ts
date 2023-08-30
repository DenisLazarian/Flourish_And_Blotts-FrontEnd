import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url:string = "http://localhost:9901/book";

  constructor(
    private http: HttpClient
  ){}



  public listBooks(): Observable<any>{
    let actionLink:string = "list";

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.get<any>(this.url+"/"+actionLink, {headers: headers})
  }

}
