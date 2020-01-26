import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedReactiveFormComponent } from './validated-reactive-form.component';

describe('ValidatedReactiveFormComponent', () => {
  let component: ValidatedReactiveFormComponent;
  let fixture: ComponentFixture<ValidatedReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatedReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
