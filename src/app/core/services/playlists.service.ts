import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  private apiUrl = 'https://localhost:7263/api';
  constructor(private http: HttpClient, private accoutnService:AccountService) { }


  getPlaylistsList(): Observable<any[]> {
  
    const userId = this.accoutnService.getUserId();
    console.log(userId);

    const url = `${this.apiUrl}/Playlists/get-playlists-for-account/${userId}`;

    return this.http.get<any[]>(url);
  }
  getPlaylistById(playlistId: string): Observable<any> {
    const url = `${this.apiUrl}/Playlists/${playlistId}`;
    return this.http.get<any>(url);
  }

  getSongsForPlaylist(playlistId: string): Observable<any[]> {
    const url = `${this.apiUrl}/Songs/get-songs-for-playlist/${playlistId}`;
    return this.http.get<any[]>(url);
  }
  updatePlaylist(playlistId: string, description: string, name: string): Observable<any> {
    const url = `https://localhost:7263/api/Playlists/${playlistId}`;
    const body = { name , description};

    return this.http.put(url, body);
  }
  createPlaylist(playlistData: any): Observable<any> {
    const userId = this.accoutnService.getUserId();
    const url = `${this.apiUrl}/Playlists/${userId}`;
    return this.http.post<any>(url, playlistData);
  }
}


