import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareMenuSidebarComponent } from './share-menu-sidebar.component';

describe('ShareMenuSidebarComponent', () => {
  let component: ShareMenuSidebarComponent;
  let fixture: ComponentFixture<ShareMenuSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareMenuSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareMenuSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
