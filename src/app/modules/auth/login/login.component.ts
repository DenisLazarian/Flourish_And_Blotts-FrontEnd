import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Credentials} from "../../../core/models/user";
import {Router} from "@angular/router";
import {UserService} from "../../../shared/services/user.service";

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
  constructor(
    private userService: UserService,
    private router: Router
  ){}


  /*
  * To submit the credentials, when you login on the app.
  * */
  login(form: NgForm):void{
    console.log('form value', form.value);

    this.userService.login(this.credentials)
      .subscribe(response =>{
        this.router.navigate(['/']).then(r => r.valueOf());
      })
  }
}
