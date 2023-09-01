import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ReadCSVFileComponent} from "./read-csvfile/read-csvfile.component";
import {AuthModule} from "./modules/auth/auth.module";
import {RegisterModule} from "./modules/register/register.module";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {path:'home', component: HomeComponent},
  // {path: 'readfile', component: ReadCSVFileComponent}
  {
    path: 'auth',
    loadChildren: () => import(`./modules/auth/auth.module`).then(m=>m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import(`./modules/home/home.module`).then(m=>m.HomeModule),
  },
  {
    path: 'registration',
    loadChildren: () => import(`./modules/register/register.module`).then(m=>m.RegisterModule)
  }


]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
