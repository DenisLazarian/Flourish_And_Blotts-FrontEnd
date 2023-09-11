import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPMenuOptComponent } from './components/admin-p-menu-opt/admin-p-menu-opt.component';
import { AdminRMenuOptComponent } from './components/admin-r-menu-opt/admin-r-menu-opt.component';
import {RouterLink} from "@angular/router";
import { ProfileOptionsComponent } from './components/profile-options/profile-options.component';
import { PublicMenuOptComponent } from './components/public-menu-opt/public-menu-opt.component';
import { RoleDirective } from './directives/role.directive';



@NgModule({
  declarations: [
    AdminPMenuOptComponent,
    AdminRMenuOptComponent,
    ProfileOptionsComponent,
    PublicMenuOptComponent,
    RoleDirective
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[
    AdminPMenuOptComponent,
    AdminRMenuOptComponent,
    ProfileOptionsComponent,
    PublicMenuOptComponent,
      RoleDirective
  ]
})
export class SharedModule { }
