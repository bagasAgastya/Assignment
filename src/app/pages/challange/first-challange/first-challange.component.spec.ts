import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChallangeComponent } from './first-challange.component';

describe('FirstChallangeComponent', () => {
  let component: FirstChallangeComponent;
  let fixture: ComponentFixture<FirstChallangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstChallangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstChallangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
