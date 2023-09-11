import {Directive, EventEmitter, Input, OnInit, Output, TemplateRef, ViewContainerRef} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../../core/models/user";
import {Roles} from "../../core/models/roles";
import {firstValueFrom, Subscription} from "rxjs";
import {SharedService} from "../services/shared.service";

@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements OnInit {

  currentUser: any = null;
  rolesDir:String[] = [];

  private eventSubscription: Subscription | undefined;


  @Output()
  actualizeView:EventEmitter<string> = new EventEmitter<string>();

  constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef,
      private userService: UserService,
      private sharedService: SharedService
  ) {
      this.eventSubscription = this.sharedService.obtainEventRole().subscribe(():void=>{
      this.updateView();
      console.log("ejecutando evento");
    });
  }

  async ngOnInit():Promise<void> {
    await firstValueFrom(this.userService.getUserSession())
      .then((value) => {
        this.currentUser = value.response;
        this.updateView();
      })
    // console.log(this.currentUser);
  }

  @Input()
  set appRole(val: Array<string>){
    console.log(' *****', val);

    this.rolesDir = val;
    this.updateView();
  }

  /**
   * This function hide the html template that have set the "appRole" directive
   * in case that the current user has the role specified in the directive, the
   * function will show the template
   *
   */

  private updateView():void{
   this.viewContainer.clear();
   if(this.checkPermission()){
     this.viewContainer.createEmbeddedView((this.templateRef));
   }
  }


  /**
   * This function get the user data and checks the roles, and compare if the
   * user has any role that specify in the directive "appRole".
   *
   * @return boolean
   */

  checkPermission():boolean {
    console.log(this.rolesDir);
    console.log(this.currentUser);
    let rolesItsNeed:String[] = this.rolesDir;
    let rolesUserHas:Roles[] = this.currentUser.roles;


    for (let i = 0; i < rolesItsNeed.length; i++) {
      for (let j = 0; j < rolesUserHas.length; j++) {
        console.log(rolesItsNeed[i] +" - "+ rolesUserHas[j].name)
        if(rolesItsNeed[i] == rolesUserHas[j].name){
          console.log("sessionInDirective", this.currentUser);
          return true;
        }
      }
    }
    return false;
  }


  ngOnDestroy():void{
    this.eventSubscription?.unsubscribe();
  }
}
