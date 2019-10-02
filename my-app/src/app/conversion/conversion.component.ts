import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../common/service/devise.service';
import { Devise } from '../common/data/devise';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {
  montant : number = 200;
  codeMonnaieSource : string = 'EUR';
  codeMonnaieCible : string = 'EUR';
  montantConverti : number ;
  listeDevises : Devise[];

  onConvertir(){
      this.deviseService.convertir(this.montant, 
                                this.codeMonnaieSource, 
                                this.codeMonnaieCible)
          .subscribe(
            (res:number)=>{ this.montantConverti = res} ,
            (err)=>{console.log(err); }
          );
  }

  ngOnInit() {
    //this.listeDevises = this.deviseService.getDevises(); SYNCHRONE
    //version ASYNCHRONE:
    this.deviseService.getDevises().subscribe(
         (tabDev:Devise[])=>{ this.listeDevises =tabDev; },
         (err)=>{console.log(err); }
    );
  }

  constructor(private deviseService : DeviseService) { 

  }

  

}
