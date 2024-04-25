import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent implements OnInit {
  constructor(public service : PaymentDetailService, private toastr : ToastrService) {

  }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord : PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord)
  }

  onDelete(id:number) {
    if (confirm("Are you sure that you want to delete this record?")) {
      this.service.deletePaymentDetail(id)
        .subscribe({
          next: res => {
          this.service.list = res as PaymentDetail[]
          this.toastr.error('Deleted successfully', 'Payment Detail Register')
        },
          error: err => { console.log(err) }
      })
    }
  }
}
