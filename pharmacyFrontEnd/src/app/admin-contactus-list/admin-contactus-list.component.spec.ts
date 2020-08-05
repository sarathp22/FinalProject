import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContactusListComponent } from './admin-contactus-list.component';

describe('AdminContactusListComponent', () => {
  let component: AdminContactusListComponent;
  let fixture: ComponentFixture<AdminContactusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContactusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContactusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
