import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';
import { map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

//exemple de réponse : {"source":"EUR","target":"USD","amount":200,"result":219.78021978021977}
//le type "ConvResponse" qui est plus precis que "object" lui meme plus précis que "any"
export interface ConvResponse {
    source : string; //ex: "EUR" ou "USD"
    target : string;
    amount : number;
    result : number;
}

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  constructor(private http : HttpClient) { }

  public convertir(montant:number,  codeSource : string , 
    codeCible: string) : Observable<number>{
    //return of(1); //pré-version (simulation)
    //http://localhost:8282/devise-api/public/convert?source=EUR&target=USD&amount=200
    let url=`devise-api/public/convert?source=${codeSource}&target=${codeCible}&amount=${montant}`;
    //types typescript: any (très vague) , object : objet quelconque 
    //                  classe précise (ou interface précise)
    return this.http.get<ConvResponse>(url)
                .pipe(
                    map( (convResponse)=> { return convResponse.result; })
                );
    }

  public getDevises() : Observable<Devise[]> {
    // return of(this.tabDevises); //pré-version (simulation)
    let url="devise-api/public/devise";
    //NB: cette url relative sera (en dev) préfixée par http://localhost:8282
    //grace à l'option --proxy-config proxy.conf.json de ng serve
    return this.http.get<Devise[]>(url);
  }


  

  //tableau temporaire (pour simulation):
  private tabDevises = [
    { code : 'EUR' , name : 'Euro' , change : 0.90} ,
    { code : 'USD' , name : 'Dollar' , change : 1},
    { code : 'GBP' , name : 'Livre' , change : 0.8} ,
    { code : 'JPY' , name : 'Yen' , change : 120}
  ];
}
