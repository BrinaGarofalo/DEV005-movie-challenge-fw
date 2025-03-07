import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
      //providers: [HttpClient]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
