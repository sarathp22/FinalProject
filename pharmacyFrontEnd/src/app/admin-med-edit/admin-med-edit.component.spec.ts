import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMedEditComponent } from './admin-med-edit.component';

describe('AdminMedEditComponent', () => {
  let component: AdminMedEditComponent;
  let fixture: ComponentFixture<AdminMedEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMedEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
