
import { Component, OnInit,Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SongsService } from 'src/app/core/services/songs.service';
import { NgZone } from '@angular/core';
import { Observable, finalize, forkJoin, of } from 'rxjs';
import { PlaylistsService } from 'src/app/core/services/playlists.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-add-song-to-playlist-dialog',
  templateUrl: './add-song-to-playlist-dialog.component.html',
  styleUrls: ['./add-song-to-playlist-dialog.component.css']
})
export class AddSongToPlaylistDialogComponent {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  playlistId: string = '';
  myPlaylists$: Observable<any[]> = of([]);
  songId: string = '';
  selectedPlaylistIds: string[] = [];
  myPlaylistsMap: Map<number, string> = new Map();
  constructor(public dialogRef: MatDialogRef<AddSongToPlaylistDialogComponent>,
     public songsService: SongsService, 
     public playlistsService:PlaylistsService,
     private zone: NgZone,
     @Inject(MAT_DIALOG_DATA) public data: any) {}

  displayedColumns: string[] = ['name', 'description', 'number', 'edit'];
  @Output() playlistCreated: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.songId = this.data.songId;
    this.myPlaylists$ = this.playlistsService.getPlaylistsList();
    this.myPlaylists$.subscribe(data => {
      this.dataSource.data = data;
    });
  }
  

 addSongInPlaylist() {
   
    const songInPlaylistData = {
      songId: this.songId,
    };
    console.log('song ID:',songInPlaylistData.songId);
   
   

    const requests = this.selectedPlaylistIds.map(playlistId =>
      
      this.songsService.addSongInPlaylist(playlistId, songInPlaylistData.songId)
    );
    
    forkJoin(requests)
    .pipe(
      finalize(() => {
        console.log('All requests completed.');
        this.closeDialog();
      })
    )
    .subscribe({
      next: results => {
        console.log('All requests completed successfully:', results);
      },
      error: error => {
        console.error('Error occurred during requests:', error);
        
      },
    });
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
