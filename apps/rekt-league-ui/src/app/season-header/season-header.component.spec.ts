import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonHeaderComponent } from './season-header.component';

describe('SeasonHeaderComponent', () => {
  let component: SeasonHeaderComponent;
  let fixture: ComponentFixture<SeasonHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
