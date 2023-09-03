import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PlaylistsService } from '../../../core/services/playlists.service';

@Component({
  selector: 'app-playlist-info',
  templateUrl: './playlist-info.component.html',
  styleUrls: ['./playlist-info.component.css']
})
export class PlaylistInfoComponent {
  playlist: any; 
  songs$: Observable<any[]> = of([]);
  songsCount: number = 0; 
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = ['title', 'released', 'artist', 'duration'];
  constructor(private route: ActivatedRoute, private playlistsService: PlaylistsService) { }
  showMessage: boolean = false;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const playlistId = params.get('id');

      if (playlistId !== null) {
        this.playlistsService.getPlaylistById(playlistId).subscribe(playlist => {
          this.playlist = playlist;
         
        });

     
        this.songs$ = this.playlistsService.getSongsForPlaylist(playlistId);
        this.songs$.subscribe(data => {
          this.dataSource.data = data;
          this.songsCount = data.length;
        });
      }


    });
  }
  showMessageForRow(row: any) {
    this.showMessage = true;

  }
  updatePlaylist() {
    this.route.paramMap.subscribe(params => {
      const playlistId = params.get('id');
      if (playlistId!=null)
        this.playlistsService.updatePlaylist(playlistId, this.playlist?.description, this.playlist?.name).subscribe(
          (response) => {
            console.log('Playlist updated successfully.', response);
          },
          (error) => {
            console.error('Failed to update playlist.', error);
          }
        );;
    });

  }


}
