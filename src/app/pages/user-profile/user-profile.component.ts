import { Component } from '@angular/core';
import { LoginService } from '../../services/log-in.services';
import { User } from '../../models/user';
import { RegUser } from '../../models/reg-user';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
regUser: any;

  constructor ( private service:LoginService ){

  }


logOutComp(){

  this.service.logOut();

}


}


