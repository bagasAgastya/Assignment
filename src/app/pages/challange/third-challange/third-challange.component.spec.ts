import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdChallangeComponent } from './third-challange.component';

describe('ThirdChallangeComponent', () => {
  let component: ThirdChallangeComponent;
  let fixture: ComponentFixture<ThirdChallangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdChallangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdChallangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
