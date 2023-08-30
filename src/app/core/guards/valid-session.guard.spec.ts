import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { validSessionGuard } from './valid-session.guard';

describe('validSessionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => validSessionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
