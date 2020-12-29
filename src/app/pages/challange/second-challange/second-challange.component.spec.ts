import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChallangeComponent } from './second-challange.component';

describe('SecondChallangeComponent', () => {
  let component: SecondChallangeComponent;
  let fixture: ComponentFixture<SecondChallangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondChallangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondChallangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
