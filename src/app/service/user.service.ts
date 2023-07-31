import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = "http://localhost:9901/user";

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.get<any>(this.url+"/list",{headers: headers});
  }

  public submitCSVFile(file:string){
    // console.log(file);
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.post<any>(this.url+"/prove/file",{headers: headers, params: {file: file}});
  }
}
