import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { SongsService } from '../../../core/services/songs.service';

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

  constructor(private service: SongsService) { }

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

  CloseModal() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = "none";
    
  }
}
}