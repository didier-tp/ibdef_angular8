import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from '../common/data/login';
import { NgForm, Validators } from '@angular/forms';
import { LoginService } from '../common/service/login.service';
import { LoginResponse } from '../common/data/loginResponse';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login : Login  = new Login();
  message : string;

  constructor(private loginService : LoginService,
              private _router : Router) { }
  onLogin(){
     //this.message="valeurs saisies=" + JSON.stringify(this.login);
     this.loginService.postLogin(this.login)
         .subscribe(
               (loginResponse : LoginResponse)=>{
                     console.log(JSON.stringify(loginResponse));
                     this.message = loginResponse.message;
                     //if(login ok) alors naviguer vers basic
                     this.naviguerVersBasicSiLoginOk(loginResponse);
                },
               (err)=>{console.log(err); }
         );
  }
  private naviguerVersBasicSiLoginOk(LoginResponse: LoginResponse){
      if(LoginResponse.status){
          let link = [ '/basic'];
          this._router.navigate(link);
      }
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

  

  ngOnInit() {
  }

}
