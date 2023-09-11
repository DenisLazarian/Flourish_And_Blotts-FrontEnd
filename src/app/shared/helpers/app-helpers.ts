import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "../services/user.service";
import {Component, Injectable} from "@angular/core";
import jwt_decode from "jwt-decode";
import {User} from "../../core/models/user";

@Injectable({
  providedIn: 'root'
})

export class helper{
  private userService: UserService | undefined;
  private static http: HttpClient;
  constructor(
    // private userService: UserService
    private http: HttpClient
  ) {
  }

  static getToken():any {
    return localStorage.getItem('token');
  }

  static checkRole(role:string):boolean{
    let token:string | null = helper.getToken();

    const headers:HttpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer '+ token);

    let hasRole:boolean = false;
    let url :string = "http://localhost:9901/";

    this.http.get(url+"user/role", {params: {role: role}, headers:headers}).subscribe(
      (response: any)=>{
        hasRole=response;
      }
    );
    return hasRole;
  }
}

