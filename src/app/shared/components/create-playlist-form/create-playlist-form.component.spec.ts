import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlaylistFormComponent } from './create-playlist-form.component';

describe('CreatePlaylistFormComponent', () => {
  let component: CreatePlaylistFormComponent;
  let fixture: ComponentFixture<CreatePlaylistFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePlaylistFormComponent]
    });
    fixture = TestBed.createComponent(CreatePlaylistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
