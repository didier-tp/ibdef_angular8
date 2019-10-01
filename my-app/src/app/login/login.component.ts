import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from '../common/data/login';
import { NgForm, Validators } from '@angular/forms';


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

  @ViewChild("formLogin", { static : false})
  form : NgForm;

  /*  <form #formLogin="ngForm"   
       (mouseenter)="onFormInit()" ....>  */ 
  onFormInit(){
      this.form.controls['password'].setValidators(    
          [Validators.required ,   Validators.minLength(4) ]);
      //...
  }

  constructor() { }

  ngOnInit() {
  }

}
