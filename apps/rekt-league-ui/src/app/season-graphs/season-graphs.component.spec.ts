import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonGraphsComponent } from './season-graphs.component';

describe('SeasonGraphsComponent', () => {
  let component: SeasonGraphsComponent;
  let fixture: ComponentFixture<SeasonGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonGraphsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
