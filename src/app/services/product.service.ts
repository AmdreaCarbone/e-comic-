import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor( private http:HttpClient ) { }

  getProducts():Observable <Product[]> {

    return this.http.get <Product[]> ("http://localhost:3000/products").pipe(map(res => {

      return res.map(product => new Product (product.name, product.type, product.img))

      }))

   }

}
