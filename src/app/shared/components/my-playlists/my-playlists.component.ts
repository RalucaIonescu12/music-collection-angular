import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { PlaylistsService } from '../../../core/services/playlists.service';
import { Router } from '@angular/router';
import { CreatePlaylistFormComponent } from '../create-playlist-form/create-playlist-form.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-my-playlists',
  templateUrl: './my-playlists.component.html',
  styleUrls: ['./my-playlists.component.css'],
  providers: [PlaylistsService]
})
export class MyPlaylistsComponent implements OnInit {
  myPlaylists$: Observable<any[]> = of([]);
  myPlaylistsMap: Map<number, string> = new Map();

  displayedColumns: string[] = ['name', 'description', 'number', 'edit'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  showMessage: boolean = false; 
 
  constructor(private service: PlaylistsService, private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.showMessage = false;
    this.myPlaylists$ = this.service.getPlaylistsList();
    this.myPlaylists$.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  showMessageForRow(row: any) {
    this.showMessage = true;
  
  }
  viewPlaylist(playlistId: string) {
    this.router.navigate(['/playlist', playlistId]);
  }
  onPlaylistCreated(newPlaylist: any) {
    this.dataSource.data = [...this.dataSource.data, newPlaylist];
  }

  openCreatePlaylistDialog() {
    const dialogRef = this.dialog.open(CreatePlaylistFormComponent, {
      width: '500px', 
      data: {} 
    });

    dialogRef.afterClosed().subscribe(result => {
    
      console.log('The dialog was closed');
      if (result) {
        // If result is not null, the user created a playlist
        console.log('Playlist data:', result);
      
      }
    });
  }
}
