import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
//components
import { RegisterComponent } from './pages/register/register.component';

import { AdminModule } from './pages/admin/admin.module';
import {  MatCardModule } from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MouseEventsDirective } from './core/directives/mouse-events.directive';
import { ImagePreloaderDirective } from './core/directives/image-preloader.directive';
import { DemoPipe } from './core/pipes/demo.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './core/directives/interceptors/error.interceptor';
import { MatTabsModule } from '@angular/material/tabs';
import { MenuPageComponent } from './shared/components/menu-page/menu-page.component';
import { MyPlaylistsComponent } from './shared/components/my-playlists/my-playlists.component';
import { MatTableModule } from '@angular/material/table';
import { FirstPageComponentComponent } from './pages/first-page-component/first-page-component.component';

import { MyAccountComponent } from './shared/components/my-account/my-account.component';
import { LoginComponent } from './pages/login/login.component';

import { BrowseSongsComponent } from './shared/components/browse-songs/browse-songs.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PlaylistInfoComponent } from './shared/components/playlist-info/playlist-info.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CreatePlaylistFormComponent } from './shared/components/create-playlist-form/create-playlist-form.component';
import { AddSongToPlaylistDialogComponent } from './shared/components/add-song-to-playlist-dialog/add-song-to-playlist-dialog.component';
//directives

//interceptors


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MouseEventsDirective,
    ImagePreloaderDirective,
    DemoPipe,
    MenuPageComponent,
    MyPlaylistsComponent,
    BrowseSongsComponent,
    FirstPageComponentComponent,
    MyAccountComponent,
    LoginComponent,
    PlaylistInfoComponent,
    CreatePlaylistFormComponent,
    AddSongToPlaylistDialogComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi:true
    }  ],
      bootstrap: [AppComponent]
})
export class AppModule {


}
