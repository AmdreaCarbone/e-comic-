import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/log-in.services';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  form: FormGroup;

  formReg : FormGroup;

  error : string = null;

  user : User;

  isLogin : boolean = true;


  constructor(private fb: FormBuilder, private svc: LoginService, private router: Router){

    if (this.svc.isLogged())

    this.router.navigateByUrl( "profilo" );

   }

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    })

    this.formReg = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      email: [null,  Validators.required]
    })

  }

  login(){


    this.svc.login(this.form?.get('username')?.value, this.form?.get('password')?.value).subscribe(res => {
      if (res == null ){ this.error = " username or password wrong"
      } else {
        this.error = null
      }
    })
  }

  register(){

    this.svc.register (this.formReg?.get('username')?.value, this.formReg?.get('password')?.value, this.formReg?.get('email')?.value).subscribe()

  }

}
