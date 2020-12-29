import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSecondComponent } from './angular-second.component';

describe('AngularSecondComponent', () => {
  let component: AngularSecondComponent;
  let fixture: ComponentFixture<AngularSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
