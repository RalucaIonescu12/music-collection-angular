import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { MyPlaylistsComponent } from './my-playlists/my-playlists.component';
import { BrowseSongsComponent } from './browse-songs/browse-songs.component';


let componentsArray = [MyPlaylistsComponent, BrowseSongsComponent]
@NgModule({
  declarations: componentsArray,
  exports: componentsArray,
  imports: [
    CommonModule,
    
  ]
})
export class ComponentsModule { }
