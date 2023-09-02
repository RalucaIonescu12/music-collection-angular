import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  private apiUrl = 'https://localhost:7263/api';
  constructor(private http: HttpClient) { }


  getSongsList(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl + '/Songs');
  }
}
