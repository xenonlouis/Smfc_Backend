import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAutomationDialogComponent } from './add-automation-dialog.component';

describe('AddAutomationDialogComponent', () => {
  let component: AddAutomationDialogComponent;
  let fixture: ComponentFixture<AddAutomationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAutomationDialogComponent]
    });
    fixture = TestBed.createComponent(AddAutomationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
