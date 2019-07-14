import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelveColStickComponent } from './twelve-col-stick.component';

describe('TwelveColStickComponent', () => {
  let component: TwelveColStickComponent;
  let fixture: ComponentFixture<TwelveColStickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TwelveColStickComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwelveColStickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
