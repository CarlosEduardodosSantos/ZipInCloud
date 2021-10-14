import { TestBed } from '@angular/core/testing';

import { ZipincloudService } from './zipincloud.service';

describe('ZipincloudService', () => {
  let service: ZipincloudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZipincloudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
