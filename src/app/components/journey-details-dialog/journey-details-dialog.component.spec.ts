import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyDetailsDialogComponent } from './journey-details-dialog.component';

describe('JourneyDetailsDialogComponent', () => {
  let component: JourneyDetailsDialogComponent;
  let fixture: ComponentFixture<JourneyDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JourneyDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(JourneyDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
