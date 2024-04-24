import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailFormComponent } from './payment-detail-form.component';

describe('PaymentDetailFormComponent', () => {
  let component: PaymentDetailFormComponent;
  let fixture: ComponentFixture<PaymentDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentDetailFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
