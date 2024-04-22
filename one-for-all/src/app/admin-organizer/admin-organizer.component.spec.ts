import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrganizerComponent } from './admin-organizer.component';

describe('AdminOrganizerComponent', () => {
  let component: AdminOrganizerComponent;
  let fixture: ComponentFixture<AdminOrganizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOrganizerComponent]
    });
    fixture = TestBed.createComponent(AdminOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
