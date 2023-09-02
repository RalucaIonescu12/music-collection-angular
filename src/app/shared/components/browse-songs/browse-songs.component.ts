import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { SongsService } from '../../../core/services/songs.service';
import { ChoosePlaylistForSongComponent } from '../choose-playlist-for-song/choose-playlist-for-song.component';

@Component({
  selector: 'app-browse-songs',
  templateUrl: './browse-songs.component.html',
  styleUrls: ['./browse-songs.component.css']
})
export class BrowseSongsComponent implements OnInit {
  songs$: Observable<any[]> = of([]);
  songsMap: Map<number, string> = new Map();

  displayedColumns: string[] = ['title', 'released','artist', 'duration', 'edit'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();


  constructor(private service: SongsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.songs$ = this.service.getSongsList();
    this.songs$.subscribe(data => {
      this.dataSource.data = data;
    });
  }
  addToPlaylist(song: any) {
    const dialogRef = this.dialog.open(ChoosePlaylistForSongComponent, {
      width: '400px', // Pass the song data to the dialog
    });

    dialogRef.afterClosed().subscribe((playlistId: string) => {
      if (playlistId) {
        // Send a request to the server to add the song to the selected playlist
        // Update the UI as needed
      }
    });
  }

}
