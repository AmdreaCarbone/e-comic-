import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  titoli:Product []

  subscribe : Subscription

  type : string

  constructor( private service : ProductService,

    private router: Router,
    private route : ActivatedRoute


    ) {
      route.params.subscribe(params => {
        this.type = params['type'];
        console.log(this.type);
        this.getProducts();
      });



    }

  ngOnInit() {

     this.getProducts();

    }

   getProducts() {

     this.subscribe = this.service.getProducts().subscribe(products => {
      this.titoli = products
      if ( this.type != 'null' )
      this.titoli = this.titoli.filter(product => product.type == this.type)
      console.log(this.type)

      })
   }

  ngOnDestroy() {

    this.subscribe.unsubscribe()

  }

}
