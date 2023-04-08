import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMusicInfoComponent } from './app-music-info.component';

describe('AppMusicInfoComponent', () => {
  let component: AppMusicInfoComponent;
  let fixture: ComponentFixture<AppMusicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMusicInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMusicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
