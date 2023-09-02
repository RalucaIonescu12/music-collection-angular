import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { PlaylistsService } from '../../../core/services/playlists.service';


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

  constructor(private service: PlaylistsService) { }

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
}
