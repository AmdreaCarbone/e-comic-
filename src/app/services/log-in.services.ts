import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { User } from "../models/user";
import { RegUser } from '../models/reg-user';

@Injectable({providedIn:'root'})
export  class LoginService{

constructor(private http: HttpClient, private router:Router){}

login(username:string, password: string) : Observable < User > {

      return this.http.get ('http://localhost:3000/users?username='+username+'&password='+password).pipe(map((res)=>{
       let array = res as User []
       if (array[0].username) {
         sessionStorage.setItem('USER', JSON.stringify(array[0]))
         this.router.navigateByUrl('profilo')
         return array[0]
       } else {
         return null
       }
      }
     )
    )
  }


 register( username:string, password:string, email:string ) : Observable < RegUser > {


  var json = { "id": 1 , "username": username, "password": password, "email": email}
    return this.http.post <RegUser> ('http://localhost:3000/users' , {
      id : 1, username : username, password : password, email : email
    } ).pipe(map(res=>{
      sessionStorage.setItem('USER', JSON.stringify(res))
      this.router.navigateByUrl('profilo')
    return res
    }))


  }


  isLogged () {

    let user = JSON.parse(sessionStorage.getItem("USER"))
    console.log(user)
    return user != null ? true : false
   }

   logOut ( ) {

    sessionStorage.removeItem("USER")

   }







}
