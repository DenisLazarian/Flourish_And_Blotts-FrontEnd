import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../../core/models/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url:string = "http://localhost:9901/book";
  books: Book[]=[];


  constructor(
    private http: HttpClient
  ){}

  public listBooks(): Observable<any>{
    let actionLink:string = "list";

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.get<any>(this.url + "/" + actionLink, {headers: headers});
  }


  public showBook(id: number): Observable<any>{
    let actionLink:string ="show";

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.get<any>(this.url+"/"+actionLink+"/"+id, {headers: headers})
  }

}
