import { CartService } from '../services/cart.service';
import { Product } from './../models/product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html'
})
export class CardProductComponent {


  @Input() product: Product

  constructor(private cartService: CartService){

  }




  addChart(){
    this.cartService.addChart(this.product).subscribe(data => {
      console.log(data)
    })

  }
}
