import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowBookComponent} from "./show-book/show-book.component";
import {ListBookComponent} from "./list-book/list-book.component";

const routes: Routes = [
  {
    path: 'show-book/:id',
    component: ShowBookComponent
  },
  {
    path: '',
    component: ListBookComponent
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
