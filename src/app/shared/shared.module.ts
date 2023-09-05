import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPMenuOptComponent } from './components/admin-p-menu-opt/admin-p-menu-opt.component';
import { AdminRMenuOptComponent } from './components/admin-r-menu-opt/admin-r-menu-opt.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    AdminPMenuOptComponent,
    AdminRMenuOptComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[
    AdminPMenuOptComponent,
    AdminRMenuOptComponent
  ]
})
export class SharedModule { }
