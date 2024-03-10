import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSignupComponent } from './forms-signup.component';

describe('FormsSignupComponent', () => {
  let component: FormsSignupComponent;
  let fixture: ComponentFixture<FormsSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsSignupComponent]
    });
    fixture = TestBed.createComponent(FormsSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
