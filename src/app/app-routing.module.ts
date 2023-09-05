import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule} from "./modules/auth/auth.module";

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
    path: 'settings',
    loadChildren: () => import(`./modules/settings/settings.module`).then(m=>m.SettingsModule),
  },
  {
    path: 'profile',
    loadChildren: () => import(`./modules/profile/profile.module`).then(m=>m.ProfileModule),
  },
  {
    path: 'admin-principal/users',
    loadChildren:  () => import(`./modules/users/manage-users.module`).then(m=>m.ManageUsersModule)
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
