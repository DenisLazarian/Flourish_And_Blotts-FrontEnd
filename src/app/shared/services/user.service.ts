import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {Credentials} from "../../core/models/user";
import jwt_decode from 'jwt-decode';
import {helper} from "../helpers/app-helpers";
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:9901/";

  constructor(
    private http: HttpClient
  ) {}

  getUserSession():Observable<any>{
    let userObj:any = jwt_decode(this.getToken());

    console.log(userObj);
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer '+ helper.getToken());

    return this.http.post(
      this.url+"user/sessionData",
      {mail:userObj.sub},
      {headers: headers} );
  }

  login(credentials: Credentials):Observable<any>{
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.post(this.url + "login", credentials, {
      observe: 'response',
      headers: headers
    }).pipe(map((response: HttpResponse<any>)=>{
      const body = response.body;
      const token = response.body.token;

      console.log(response)
      if(token != undefined) {
        localStorage.setItem('token', token);
      }
      return body;
    }
    ),
      catchError((error: HttpErrorResponse)=>{
        const errorMessage = error.error.message; // Supongamos que el mensaje de error está en el campo "message"
        let containerError = $('#errorDiv');
        containerError.removeClass("d-none");
        containerError.append("<div><i class='bi bi-exclamation-octagon-fill' ></i> "+errorMessage+"</div>");

        // Devolver un observable vacío o un valor predeterminado si es necesario
        return throwError(()=>errorMessage);
      }));
  }

  getToken():any {
    return localStorage.getItem('token');
  }

  public getData(): Observable<any>{

    let token:string | null = helper.getToken();

    const headers:HttpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer '+ token);

    return this.http.get<any>(this.url+"user/list",{headers: headers});
  }


  // public checkRole(role:string):boolean{
  //   let token:string | null = helper.getToken();
  //
  //   const headers:HttpHeaders = new HttpHeaders()
  //     .set('content-type', 'application/json')
  //     .set('Access-Control-Allow-Origin', '*')
  //     .set('Authorization', 'Bearer '+ token);
  //
  //   let hasRole:boolean = false;
  //
  //   this.http.get(this.url+"user/role", {params: {role: role}, headers:headers}).subscribe(
  //     (response: any)=>{
  //         hasRole=response;
  //     }
  //   );
  //   return hasRole;
  // }



  public submitCSVFile(file:string){
    // console.log(file);
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.post<any>(this.url+"/prove/file",{headers: headers, params: {file: file}});
  }


}
