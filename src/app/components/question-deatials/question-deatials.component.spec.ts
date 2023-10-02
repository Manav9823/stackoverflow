import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDeatialsComponent } from './question-deatials.component';

describe('QuestionDeatialsComponent', () => {
  let component: QuestionDeatialsComponent;
  let fixture: ComponentFixture<QuestionDeatialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionDeatialsComponent]
    });
    fixture = TestBed.createComponent(QuestionDeatialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
