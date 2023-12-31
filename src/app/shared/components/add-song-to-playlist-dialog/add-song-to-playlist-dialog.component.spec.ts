import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSongToPlaylistDialogComponent } from './add-song-to-playlist-dialog.component';

describe('AddSongToPlaylistDialogComponent', () => {
  let component: AddSongToPlaylistDialogComponent;
  let fixture: ComponentFixture<AddSongToPlaylistDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSongToPlaylistDialogComponent]
    });
    fixture = TestBed.createComponent(AddSongToPlaylistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
