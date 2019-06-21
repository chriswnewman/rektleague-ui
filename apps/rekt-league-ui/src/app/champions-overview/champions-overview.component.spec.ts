import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsOverviewComponent } from './champions-overview.component';

describe('ChampionsOverviewComponent', () => {
  let component: ChampionsOverviewComponent;
  let fixture: ComponentFixture<ChampionsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
