import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSingleComponent } from './store-single.component';

describe('StoreSingleComponent', () => {
  let component: StoreSingleComponent;
  let fixture: ComponentFixture<StoreSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
