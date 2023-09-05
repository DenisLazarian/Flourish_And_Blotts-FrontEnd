import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./create/create.component";
import {ShowComponent} from "./show/show.component";
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {
    path: 'create',
    component:  CreateComponent
  },
  {
    path: 'show',
    component: ShowComponent
  },
  {
    path: 'list',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUsersRoutingModule { }
