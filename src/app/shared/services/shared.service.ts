import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private eventSubject = new Subject<void>();
  constructor() { }

  obtainEvent():Observable<any>{
    return this.eventSubject.asObservable();
  }

  updateProfileView(){
    this.eventSubject.next();
  }
}
