import { Product } from './../models/product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html'
})
export class CardProductComponent {

  @Input() product: Product



}
  console.log(Product)
