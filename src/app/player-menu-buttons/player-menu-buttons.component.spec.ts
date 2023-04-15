import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMenuButtonsComponent } from './player-menu-buttons.component';

describe('PlayerMenuButtonsComponent', () => {
  let component: PlayerMenuButtonsComponent;
  let fixture: ComponentFixture<PlayerMenuButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerMenuButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerMenuButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
