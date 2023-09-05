import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Credentials} from "../../core/models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:9901/";

  constructor(
    private http: HttpClient
  ) { }

  login(credentials: Credentials){
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.post(this.url + "login", credentials, {
      observe: 'response',
      headers: headers
    }).pipe(map((response: HttpResponse<any>)=>{
      const body = response.body;

      // const bearerToken = headers.get('Authorization');
      const token = response.body.token;

      console.log(response)
      if(token != undefined) {
        localStorage.setItem('token', token);
      }
      return body;
    }));
  }

  getToken() {
    return localStorage.getItem('token');
  }

  public getData(): Observable<any>{

    let token = localStorage.getItem('token');

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer '+ token);

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
