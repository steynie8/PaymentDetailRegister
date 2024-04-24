import { TestBed } from '@angular/core/testing';

import { PaymentDetailService } from './payment-detail.service';

describe('PaymentDetailService', () => {
  let service: PaymentDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
