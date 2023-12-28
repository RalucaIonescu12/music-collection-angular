import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PlaylistsService } from '../../../core/services/playlists.service';
import { catchError, switchMap } from 'rxjs/operators';
import { AccountService } from 'src/app/core/services/account.service';
@Component({
  selector: 'app-playlist-info',
  templateUrl: './playlist-info.component.html',
  styleUrls: ['./playlist-info.component.css']
})
export class PlaylistInfoComponent implements OnInit {
  playlist: any; 
  songs$: Observable<any[]> = of([]);
  songsCount: number = 0; 
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = ['title', 'released', 'artist', 'duration'];
  
  constructor(
    private route: ActivatedRoute, 
    private playlistsService: PlaylistsService,
    private accountService: AccountService ) { }

  showMessage: boolean = false;
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const playlistId = params.get('id');

        if (playlistId !== null) {
          return this.checkAuthentication().pipe(
            switchMap(() => this.playlistsService.getPlaylistById(playlistId))
          );
        }
        return of(null);
      }),
      catchError(() => {
        return of(null);
      })
    ).subscribe(playlist => {
      if (playlist) {
        this.playlist = playlist;
        this.songs$ = this.playlistsService.getSongsForPlaylist(playlist.id);
        this.songs$.subscribe(data => {
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

  private checkAuthentication(): Observable<boolean> {
    const isAuthenticated = this.accountService.isAuthenticatedUser();
    if (!isAuthenticated) {
      // Handle unauthorized access, e.g., redirect to login page
      this.accountService.redirectToLogin();
      return of(false);
    }
    return of(true);
  }
}
