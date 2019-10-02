import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraductionService {

  public langue : string ="us"; //par defaut (autres valeurs : "fr" , "de" , "it" , "es" , ...)

  tradUs = {
    hello : "hello",
    goodbye : "goodbye"
  }

  tradFr = {
    hello : "bonjour",
    goodbye : "au revoir"
  }

  constructor() { }
}
