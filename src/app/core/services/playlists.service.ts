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

    // Construct the URL with the user ID
    const url = `${this.apiUrl}/Playlists/get-playlists-for-account/${userId}`;

    // Make the HTTP GET request
    return this.http.get<any[]>(url);
}
}


