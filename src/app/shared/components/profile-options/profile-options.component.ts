import {Component, EventEmitter} from '@angular/core';
import {UserService} from "../../services/user.service";
import {catchError, of, Subscription} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-profile-options',
  templateUrl: './profile-options.component.html',
  styleUrls: ['./profile-options.component.css']
})
export class ProfileOptionsComponent {

  sessionData: any = new EventEmitter<string>();
  registered:any = new EventEmitter<string>();

  private eventSubscription: Subscription | undefined;

  constructor(
    private userService: UserService,
    private sharedService: SharedService
  ) {
    this.eventSubscription = this.sharedService.obtainEvent().subscribe(()=>{
      this.dataSession();
    })
  }

  ngOnInit():void{
    this.dataSession();
  }
  logout():void{
    localStorage.removeItem('token');
    this.dataSession();
  }


  dataSession(): void{
    if(localStorage.getItem('token') == undefined || localStorage.getItem('token') == null){
      this.registered=false;
      console.log("not Authenticated")
      return ;
    }
    console.log("we have token")
    this.userService.getUserSession()
      .pipe(
        catchError((err:HttpErrorResponse) => {
          console.error( "Error al obtener los datos de sessión: ", err);
          return of(null);
        })
      )
      .subscribe(response=>{
        if (response !== null) {
          this.registered=true;
          this.sessionData = response;
          console.log("Datos de sessión obtenidos: ", this.sessionData);
        } else {
          this.registered=false;
        }
      });
  }

  ngOnDestroy():void{
    this.eventSubscription?.unsubscribe();
  }
}
