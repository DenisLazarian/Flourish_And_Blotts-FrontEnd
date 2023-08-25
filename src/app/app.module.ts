import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Route, RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { EjemploRouteComponent } from './ejemplo-route/ejemplo-route.component';
import { Ejem2Component } from './ejem2/ejem2.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ReadCSVFileComponent } from './read-csvfile/read-csvfile.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EjemploRouteComponent,
    Ejem2Component,
    Pagina2Component,
    ReadCSVFileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
