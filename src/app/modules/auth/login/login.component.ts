import {Component, EventEmitter, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Credentials} from "../../../core/models/user";
import {Router} from "@angular/router";
import {UserService} from "../../../shared/services/user.service";
import {catchError, of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {SharedService} from "../../../shared/services/shared.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials: Credentials = {
    mail: '',
    password: ''
  };

  @Output() registered: any = new EventEmitter<string>;
  @Output() sessionData: any = new EventEmitter<string>;

  constructor(
    private userService: UserService,
    private router: Router,
    private sharedService: SharedService
  ){}


  /*
  * To submit the credentials, when you login on the app.
  * */
  login(form: NgForm):void{
    // console.log('form value', form.value);
    this.userService.login(this.credentials)
      .subscribe(response =>{
        this.updateSession();
        this.router.navigate(['/']).then(r => r.valueOf());
      });
  }

  updateSession(): void{
    this.sharedService.updateProfileView();
  }
}
