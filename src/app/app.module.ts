import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Route, RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ReadCSVFileComponent } from './read-csvfile/read-csvfile.component';
// import { UserComponent } from './core/models/user/user.component';
import {AuthModule} from "./modules/auth/auth.module";
import {HomeModule} from "./modules/home/home.module";
import { RegistrationComponent } from './modules/register/registration/registration.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReadCSVFileComponent,
    RegistrationComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
