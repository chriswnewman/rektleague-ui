import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonOverviewComponent } from './season-overview.component';

describe('SeasonOverviewComponent', () => {
  let component: SeasonOverviewComponent;
  let fixture: ComponentFixture<SeasonOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
