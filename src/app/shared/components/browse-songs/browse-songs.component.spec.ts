import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseSongsComponent } from './browse-songs.component';

describe('BrowseSongsComponent', () => {
  let component: BrowseSongsComponent;
  let fixture: ComponentFixture<BrowseSongsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseSongsComponent]
    });
    fixture = TestBed.createComponent(BrowseSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
