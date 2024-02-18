import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SetViewComponent } from './set-view/set-view.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SetViewComponent
  ],
    imports: [
        CommonModule,
        SettingsRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SettingsModule { }
