import { TestBed } from '@angular/core/testing';

import { StudentresultsService } from './studentresults.service';

describe('StudentresultsService', () => {
  let service: StudentresultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentresultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
