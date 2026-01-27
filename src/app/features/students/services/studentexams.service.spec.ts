import { TestBed } from '@angular/core/testing';

import { StudentexamsService } from './studentexams.service';

describe('StudentexamsService', () => {
  let service: StudentexamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentexamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
