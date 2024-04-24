import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentDetailsComponent } from "./payment-details/payment-details.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styles: [],
    imports: [RouterOutlet, PaymentDetailsComponent]
})
export class AppComponent {
  title = 'PaymentApp';
}
