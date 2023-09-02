import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlaylistForSongComponent } from './choose-playlist-for-song.component';

describe('ChoosePlaylistForSongComponent', () => {
  let component: ChoosePlaylistForSongComponent;
  let fixture: ComponentFixture<ChoosePlaylistForSongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoosePlaylistForSongComponent]
    });
    fixture = TestBed.createComponent(ChoosePlaylistForSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
