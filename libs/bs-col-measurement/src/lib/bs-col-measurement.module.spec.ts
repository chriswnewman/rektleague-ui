import { async, TestBed } from '@angular/core/testing';
import { BsColMeasurementModule } from './bs-col-measurement.module';

describe('BsColMeasurementModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BsColMeasurementModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BsColMeasurementModule).toBeDefined();
  });
});
