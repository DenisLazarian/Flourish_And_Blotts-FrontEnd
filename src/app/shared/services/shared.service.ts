import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private eventSubject = new Subject<void>();
  private eventSubjectTempRole = new Subject<void>();
  private eventSubjectTempRoleLogOut = new Subject<void>();
  constructor() { }

  obtainEvent():Observable<any>{
    return this.eventSubject.asObservable();
  }

  updateProfileView():void{
    this.eventSubject.next();
  }


  updateTemplateView():void {
      this.eventSubjectTempRole.next()
  }
  obtainEventRole():Observable<any>{
    return this.eventSubjectTempRole.asObservable();
  }

  updateViewsAppRoleLogOut() {
    this.eventSubjectTempRoleLogOut.next()
  }
  obtainEventRoleLogOut():Observable<any>{
    return this.eventSubjectTempRoleLogOut.asObservable();
  }
}
