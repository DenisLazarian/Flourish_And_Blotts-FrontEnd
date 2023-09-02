import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ReadCSVFileComponent } from './read-csvfile/read-csvfile.component';
import {AuthModule} from "./modules/auth/auth.module";
import {HomeModule} from "./modules/home/home.module";




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReadCSVFileComponent,
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
