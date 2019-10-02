import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  //tableau temporaire (pour simulation):
  private tabDevises = [
    { code : 'EUR' , name : 'Euro' , change : 0.90} ,
    { code : 'USD' , name : 'Dollar' , change : 1},
    { code : 'GBP' , name : 'Livre' , change : 0.8} ,
    { code : 'JPY' , name : 'Yen' , change : 120}
  ];

  public getDevises() : Observable<Devise[]> {
    return of(this.tabDevises);
  }


  public convertir(montant:number,  codeSource : string , 
                   codeCible: string) : Observable<number>{
    return of(1);
  }

  constructor() { }
}
