import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login : Login  = new Login();
  message : string;

  onLogin(){
     this.message="valeurs saisies=" + JSON.stringify(this.login);
  }

  constructor() { }

  ngOnInit() {
  }

}
