import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  private apiUrl = 'https://localhost:7263/api';
  constructor(private http: HttpClient) { }


  getPlaylistsList(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl + '/Playlists/get-playlists-for-account/3662c769-7f40-4bc5-dee8-08dbaa34f4c1');
  }
}


