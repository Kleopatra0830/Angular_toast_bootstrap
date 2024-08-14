import { Component } from '@angular/core';
// Import Bootstrap's Toast class
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {

  constructor() {}

  showToast() {
    const toastElement = document.getElementById('toast');
    if (toastElement) {
      const toast = new Toast(toastElement);
      toast.show();
    }
  }
}
