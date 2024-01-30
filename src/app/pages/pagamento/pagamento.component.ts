import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.scss'
})
export class PagamentoComponent {

  prezzoTotale = 0;

  constructor( private route:ActivatedRoute, private router:Router) {

    this.prezzoTotale = this.router.getCurrentNavigation()?.extras?.state['totale']

  }



}
