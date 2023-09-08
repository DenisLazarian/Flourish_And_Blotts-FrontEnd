import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPMenuOptComponent } from './components/admin-p-menu-opt/admin-p-menu-opt.component';
import { AdminRMenuOptComponent } from './components/admin-r-menu-opt/admin-r-menu-opt.component';
import {RouterLink} from "@angular/router";
import { ProfileOptionsComponent } from './components/profile-options/profile-options.component';



@NgModule({
  declarations: [
    AdminPMenuOptComponent,
    AdminRMenuOptComponent,
    ProfileOptionsComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[
    AdminPMenuOptComponent,
    AdminRMenuOptComponent,
    ProfileOptionsComponent
  ]
})
export class SharedModule { }
