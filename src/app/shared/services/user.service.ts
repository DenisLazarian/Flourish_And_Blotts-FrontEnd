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


  // hasRoles(roles:string[]):Observable<boolean>{
  //   let token:string | null = this.getToken();
  //
  //   if(token == null){
  //     return new Observable<boolean>((observer) => {
  //       observer.next(false);
  //       observer.complete();
  //     });
  //   }
  //
  //   const headers:HttpHeaders = new HttpHeaders()
  //     .set('content-type', 'application/json')
  //     .set('Access-Control-Allow-Origin', '*')
  //     .set('Authorization', 'Bearer '+ token);
  //
  //
  //   return this.http
  //       .get(this.url + `user/role?roles=${roles.join(',')}`, { headers: headers })
  //       .pipe(
  //         map((data: any) => {
  //           return data.response;
  //         })
  //       );
  // }

  public changePass(data:any){
    const headers:HttpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer '+this.getToken());

    return this.http.post<any>(this.url+"user/passChange",data,{headers: headers});
  }


  public submitCSVFile(file:string){
    // console.log(file);
    const headers:HttpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.post<any>(this.url+"/prove/file",{headers: headers, params: {file: file}});
  }


  getUserRole(): Observable<string> {
    const headers:HttpHeaders = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', 'Bearer '+this.getToken());

    return this.http.get<string>(this.url+'user/role', {headers:headers});
  }
}
