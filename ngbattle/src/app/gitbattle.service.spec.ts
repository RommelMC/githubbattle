import { TestBed, inject } from '@angular/core/testing';

import { GitbattleService } from './gitbattle.service';

describe('GitbattleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitbattleService]
    });
  });

  it('should be created', inject([GitbattleService], (service: GitbattleService) => {
    expect(service).toBeTruthy();
  }));
});
