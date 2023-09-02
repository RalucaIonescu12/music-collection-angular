import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-choose-playlist-for-song',
  templateUrl: './choose-playlist-for-song.component.html',
  styleUrls: ['./choose-playlist-for-song.component.css']
})
export class ChoosePlaylistForSongComponent {
  constructor(
    public dialogRef: MatDialogRef<ChoosePlaylistForSongComponent>,
   
  ) { }

  // Handle playlist selection and close the dialog
  selectPlaylist(playlistId: string) {
    this.dialogRef.close(playlistId);
  }
}
