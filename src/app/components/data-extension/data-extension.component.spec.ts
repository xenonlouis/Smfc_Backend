import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataExtensionComponent } from './data-extension.component';

describe('DataExtensionComponent', () => {
  let component: DataExtensionComponent;
  let fixture: ComponentFixture<DataExtensionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataExtensionComponent]
    });
    fixture = TestBed.createComponent(DataExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
