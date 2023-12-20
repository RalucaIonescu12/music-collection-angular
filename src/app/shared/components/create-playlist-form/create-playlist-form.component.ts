
import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PlaylistsService } from 'src/app/core/services/playlists.service';
// ensures change detection works properly
import { NgZone } from '@angular/core';
@Component({
  selector: 'app-create-playlist-form',
  templateUrl: './create-playlist-form.component.html',
  styleUrls: ['./create-playlist-form.component.css']
})
export class CreatePlaylistFormComponent {
  playlistName: string = '';
  playlistDescription: string = '';
  nameValid: boolean = true;
  descriptionValid: boolean = true;
  isValid:boolean=true;
  constructor(public dialogRef: MatDialogRef<CreatePlaylistFormComponent>, public playlistService:PlaylistsService, private zone: NgZone) {}
  @Output() playlistCreated: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  createPlaylist() {
   
    const playlistData = {
      name: this.playlistName,
      description: this.playlistDescription
    };

    this.playlistService.createPlaylist(playlistData).subscribe({
      next: (result) => {
        console.log('Playlist created successfully:', result);
        // Emit the newly created playlist to the parent component
        this.playlistCreated.emit(result);

        this.dialogRef.close(result);
      },
      error: (error) => {
        console.error('Error creating playlist:', error);
      }}
    );
  }

  validateInputs(field: string) {
    this.zone.run(() => {
        if (field === 'name') {
            this.nameValid = this.playlistName.length <= 30;
        } else if (field === 'description') {
            this.descriptionValid = this.playlistDescription.length <= 500;
        }

        // Update the isValid flag based on the validation results
        this.isValid = this.nameValid && this.descriptionValid;
    });
}
  closeDialog() {
    this.dialogRef.close();
  }
}
