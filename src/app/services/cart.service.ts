import { CartsProduct } from './../models/cartsProduct';
import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = 'http://localhost:3000/'

constructor( private httpClient:HttpClient ) {
 }


 addChart( product:Product ):Observable<CartsProduct>{

  let user = JSON.parse(sessionStorage.getItem('USER'));
  let cart = JSON.parse(sessionStorage.getItem('CART'));
  let cartsProduct = new CartsProduct(null, cart.id, product.name, product.type, product.img, product.prezzo)
  return this.httpClient.post<CartsProduct>(this.url + 'cartsProduct' , cartsProduct ).pipe(map(response => {
    return response
   }))


 }


 createChart():Observable<Cart>{


  let user = JSON.parse(sessionStorage.getItem('USER'));
  let cart = new Cart( null, user.id )

   return this.httpClient.post<Cart>(this.url + 'carts', cart).pipe(map (response => {

    sessionStorage.setItem('CART', JSON.stringify(response) )
    return response
   }))

 }


 getProducts():Observable < CartsProduct[]> {

    return this.httpClient.get <CartsProduct[]> ("http://localhost:3000/cartsProduct?cart="+JSON.parse(sessionStorage.getItem("CART")).id).pipe(map(res => {
    return res.map(product => new CartsProduct (product.id, product.cart, product.name, product.type, product.img, product.prezzo))

    }))

 }

 removeProduct(product: CartsProduct):Observable <Object> {
  console.log(product)
  return this.httpClient.delete("http://localhost:3000/cartsProduct/"+product.id)
 }
}
