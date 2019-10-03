import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../data/login';
import { LoginResponse } from '../data/loginResponse';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _headers = new HttpHeaders({'Content-Type': 'application/json'}); 

  constructor(private http : HttpClient) { }

  public postLogin(login: Login): Observable<LoginResponse>{
     let url="login-api/public/auth"; //sera préfixé par http://localhost:8282
     //via l'option --proxy-config proxy.conf.json de ng serve
     //NB: map() transforme et tap() declenche un traitement en plus sans transformer
     return this.http.post<LoginResponse>(url,login, {headers: this._headers} )
            .pipe(
                tap((loginResponse)=>{ this.sauvegarderJeton(loginResponse);})
            );
  }

  private sauvegarderJeton(loginResponse:LoginResponse){
       if(loginResponse.status){
         localStorage.setItem('token',loginResponse.token);
         //ou autre façon de mémoriser le jeton
       }
  }

}
