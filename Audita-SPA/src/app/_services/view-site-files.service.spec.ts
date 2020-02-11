/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewSiteFilesService } from './view-site-files.service';

describe('Service: ViewSiteFiles', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewSiteFilesService]
    });
  });

  it('should ...', inject([ViewSiteFilesService], (service: ViewSiteFilesService) => {
    expect(service).toBeTruthy();
  }));
});
