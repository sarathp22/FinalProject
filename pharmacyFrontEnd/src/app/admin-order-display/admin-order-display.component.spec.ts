import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderDisplayComponent } from './admin-order-display.component';

describe('AdminOrderDisplayComponent', () => {
  let component: AdminOrderDisplayComponent;
  let fixture: ComponentFixture<AdminOrderDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrderDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
