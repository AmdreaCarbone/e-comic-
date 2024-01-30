import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bancomat',
  templateUrl: './bancomat.component.html',
  styleUrl: './bancomat.component.scss'
})
export class BancomatComponent {

  form : FormGroup

  constructor ( private fb:FormBuilder ){

    this.form = fb.group({
      nome: [null, Validators.required],
      numeroCarte: [null, Validators.required],
      cvv: [null, Validators.required],
      dataScadenza: [null, Validators.required]
    })

  }

}
