import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularThirdComponent } from './angular-third.component';

describe('AngularThirdComponent', () => {
  let component: AngularThirdComponent;
  let fixture: ComponentFixture<AngularThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
