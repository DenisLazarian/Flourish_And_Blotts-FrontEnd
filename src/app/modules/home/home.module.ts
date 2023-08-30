import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ListBookComponent } from './list-book/list-book.component';
import { ShowBookComponent } from './show-book/show-book.component';


@NgModule({
  declarations: [
    ListBookComponent,
    ShowBookComponent
  ],
  exports: [
    ListBookComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
