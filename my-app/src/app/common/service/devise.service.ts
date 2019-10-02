import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';

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

  //public getDevises() : Observable<Devise[]> {
  public getDevises() : Devise[] {
    return this.tabDevises;
  }

  //public convertir(...) Observable<number>{
  public convertir(montant:number, codeSource : string , codeCible: string) : number{
    return 1;
  }

  constructor() { }
}
