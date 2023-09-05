import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUsersRoutingModule } from './manage-users-routing.module';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ShowComponent } from './show/show.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    ShowComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ManageUsersRoutingModule
  ]
})
export class ManageUsersModule { }
