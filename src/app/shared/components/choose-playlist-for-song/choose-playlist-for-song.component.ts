import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-choose-playlist-for-song',
  templateUrl: './choose-playlist-for-song.component.html',
  styleUrls: ['./choose-playlist-for-song.component.css'],

  standalone: true,
  imports: [MatDialogModule, MatButtonModule],

})
export class ChoosePlaylistForSongComponent {

}
