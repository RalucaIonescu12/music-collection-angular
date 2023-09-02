import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { RegisterComponent } from './pages/register/register.component';

import { AdminModule } from './pages/admin/admin.module';
import { MatCardModule } from '@angular/material/card';

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
import { BrowseSongsComponent } from './shared/components/browse-songs/browse-songs.component';
import { FirstPageComponentComponent } from './pages/first-page-component/first-page-component.component';

import { MyAccountComponent } from './shared/components/my-account/my-account.component';
import { LoginComponent } from './pages/login/login.component';

import { ChoosePlaylistForSongComponent } from './shared/components/choose-playlist-for-song/choose-playlist-for-song.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
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
    ChoosePlaylistForSongComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    MatCardModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    MatDialogRef,
    MatDialogModule,
    MatDialog
  
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
