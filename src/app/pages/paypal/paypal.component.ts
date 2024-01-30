import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrl: './paypal.component.scss'
})
export class PaypalComponent {

  form :FormGroup

  constructor ( private FormBuilder:FormBuilder ){

    this.form = FormBuilder.group({
      email : [null, [Validators.required, Validators.email]]
    })
  }

}
