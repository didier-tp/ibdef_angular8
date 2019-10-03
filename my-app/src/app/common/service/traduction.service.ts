import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraductionService {

  private _langue : string ="us"; //par defaut (autres valeurs : "fr" , "de" , "it" , "es" , ...)
  private _currentTrad : any  ;

  tradUs = {
    hello : "hello",
    goodbye : "goodbye"
  }

  tradFr = {
    hello : "bonjour",
    goodbye : "au revoir"
  }

  public set langue(l:string){
       this._langue= l;
       switch(this._langue){
         case "fr":
            this._currentTrad = this.tradFr;
            break;
          case "en":
          default:
            this._currentTrad = this.tradFr;
       }
  }

  public get traductions() : any{
      return this._currentTrad;
  }

  constructor() {
    this._currentTrad = this.tradUs;
   }
}
