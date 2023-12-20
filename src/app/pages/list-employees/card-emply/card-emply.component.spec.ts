import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmplyComponent } from './card-emply.component';

describe('FormEmplyComponent', () => {
  let component: CardEmplyComponent;
  let fixture: ComponentFixture<CardEmplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardEmplyComponent]
    });
    fixture = TestBed.createComponent(CardEmplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
