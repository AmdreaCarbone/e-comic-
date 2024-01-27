import { Component } from '@angular/core';
import { LoginService } from '../../services/log-in.services';
import { User } from '../../models/user';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  constructor ( private service:LoginService ){

  }


logOutComp(){

  this.service.logOut();

}


}


