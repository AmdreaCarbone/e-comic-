import { Router } from '@angular/router';
import { CartsProduct } from '../../models/cartsProduct';
import { Product } from '../../models/product';
import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.scss'
})
export class CarrelloComponent {


  products : CartsProduct[] = [];

  prezzoTotale : number = 0;



  constructor( private CartService: CartService, private Router:Router ){

    this.getProducts()
  }

  remove(product : CartsProduct){
    this.CartService.removeProduct(product).subscribe(res =>{
      this.getProducts()
    })
  }

  getProducts(){


     this.CartService.getProducts().subscribe(res => {
      this.products = res
      var somma = 0
      this.products.forEach(product => {
        somma = somma + product.prezzo
      })
      this.prezzoTotale = somma
      console.log(this.products)
    })
  }

  goToPagamento(){
    this.Router.navigateByUrl('/pagamento', {
      state:{ totale:this.prezzoTotale }
    })

  }
}
