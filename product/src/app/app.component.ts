import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  totalPrice = 0;
  updateTotalPrice(total: number) {
    this.totalPrice = total;
  }

}
