import { TestBed } from '@angular/core/testing';

import { LibrarianGuard } from './librarian.guard';

describe('LibrarianGuard', () => {
  let guard: LibrarianGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LibrarianGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
