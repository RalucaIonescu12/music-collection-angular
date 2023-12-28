import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { SongsService } from '../../../core/services/songs.service';
import { AddSongToPlaylistDialogComponent } from '../add-song-to-playlist-dialog/add-song-to-playlist-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-browse-songs',
  templateUrl: './browse-songs.component.html',
  styleUrls: ['./browse-songs.component.css'],
})
export class BrowseSongsComponent implements OnInit {
  songs$: Observable<any[]> = of([]);
  songsMap: Map<number, string> = new Map();

  displayedColumns: string[] = ['title', 'released', 'artist', 'duration', 'edit'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  showMessage: boolean = false;

  constructor(private service: SongsService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.showMessage = false;
    this.songs$ = this.service.getSongsList();
    this.songs$.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  showMessageForRow(row: any) {
    this.showMessage = true;

  }
  handleAddToPlaylist(songId: string, title: string) {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = "block";
    }

    console.log('Clicked on song with ID:', songId, 'and title: ', title);
  }
  openAddToPlaylistDialog(id: string) {
    const dialogRef = this.dialog.open(AddSongToPlaylistDialogComponent, {
      width: '500px', 
      data: { songId: id} 
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if (result) {
        // If result is not null, the user created a playlist
        console.log('Song added to playlist');
     
      }
    });
  }
 
}