import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { FirstPageComponentComponent } from './pages/first-page-component/first-page-component.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowseSongsComponent } from './shared/components/browse-songs/browse-songs.component';
import { MenuPageComponent } from './shared/components/menu-page/menu-page.component';
import { MyAccountComponent } from './shared/components/my-account/my-account.component';
import { MyPlaylistsComponent } from './shared/components/my-playlists/my-playlists.component';
import { PlaylistInfoComponent } from './shared/components/playlist-info/playlist-info.component';

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component:LoginComponent
  },
  {
    path: "",
    component: FirstPageComponentComponent
  },
  {
    path: "admin",
    canActivate: [AuthGuard],
    loadChildren:()=>import ('./pages/admin/admin.module').then (m=>m.AdminModule)
  },
  {
    path: "menu",
    component: MenuPageComponent,
    canActivate: [AuthGuard], 
    children: [
      { path: 'browse-songs', component: BrowseSongsComponent },
      { path: 'my-playlists', component: MyPlaylistsComponent },
      { path: 'my-account', component: MyAccountComponent }
    ],
 
  },
  {
    path: 'playlist/:id',
    component: PlaylistInfoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
