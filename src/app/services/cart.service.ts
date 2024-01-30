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
///http client è il servizio che gestisce le chiamate al server
constructor( private httpClient:HttpClient ) {
 }

/// questo è il metodo per aggiungere un prodotto al carrello
 addChart( product:Product ):Observable<CartsProduct>{

  let user = JSON.parse(sessionStorage.getItem('USER'));
  let cartsProduct = new CartsProduct(null, user.id, product.name, product.type, product.img, product.prezzo)
  return this.httpClient.post<CartsProduct>(this.url + 'cartsProduct' , cartsProduct ).pipe(map(response => {
    return response
   }))
 }

/// questo è il metodo per visualizzarli nel carrello in base all'utente che è loggato.
/// quindi io qua richiedo solo il body della response della chiamata. url e tipo di dato
 getProducts():Observable < CartsProduct[]> {

    return this.httpClient.get <CartsProduct[]> ("http://localhost:3000/cartsProduct?cart="+JSON.parse(sessionStorage.getItem("USER")).id).pipe(map(res => {
    return res.map(product => new CartsProduct (product.id, product.cart, product.name, product.type, product.img, product.prezzo))
    }))

 }
// il body della response è void.
 removeProduct(product: CartsProduct):Observable <Object> {
  console.log(product)
  return this.httpClient.delete("http://localhost:3000/cartsProduct/"+product.id)
 }
}
