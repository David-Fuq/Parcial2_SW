/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BandService } from './band.service';

describe('Service: Band', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BandService]
    });
  });

  it('should ...', inject([BandService], (service: BandService) => {
    expect(service).toBeTruthy();
  }));
});
