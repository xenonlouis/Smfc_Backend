import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationDetailsDialogComponent } from './automation-details-dialog.component';

describe('AutomationDetailsDialogComponent', () => {
  let component: AutomationDetailsDialogComponent;
  let fixture: ComponentFixture<AutomationDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomationDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(AutomationDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
