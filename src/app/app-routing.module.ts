import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EjemploRouteComponent} from "./ejemplo-route/ejemplo-route.component";
import {ReadCSVFileComponent} from "./read-csvfile/read-csvfile.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'ejem', component: EjemploRouteComponent},
  {path: 'readfile', component: ReadCSVFileComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
