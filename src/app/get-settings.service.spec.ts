import { TestBed } from '@angular/core/testing';

import { GetTournamentsAndSettingsService } from './get-settings.service';

describe('GetTournamentsAndSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTournamentsAndSettingsService = TestBed.get(GetTournamentsAndSettingsService);
    expect(service).toBeTruthy();
  });
});
