import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { newPassword } from 'src/app/core/models/user';
import { SharedService } from 'src/app/shared/services/shared.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-set-view',
  templateUrl: './set-view.component.html',
  styleUrls: ['./set-view.component.css']
})
export class SetViewComponent implements OnInit{
  data: newPassword = {
    password: '',
    newPassword: '',
    confirmPassword: ''
  };
  // @ts-ignore
  public formChangePass: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private sharedService: SharedService
  ) { }




  ngOnInit(): void{
    this.formChangePass = this.formBuilder.group({
      password: ['',[
          Validators.required
        ]
      ],
      newPassword: ['',[
          Validators.required
        ]
      ],
      confirmPassword: ['',[
          Validators.required
        ]
      ],
    });
  }

  submit(): void {
    console.log(this.formChangePass.value);

    this.userService.changePass(this.formChangePass.value)
    .subscribe((): void => {
      console.log("Exit");
    });
    // throw new Error('Method not implemented.');
  }

}
