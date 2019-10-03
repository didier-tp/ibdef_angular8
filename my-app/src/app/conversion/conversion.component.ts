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
  codeMonnaieSource : string ;
  codeMonnaieCible : string ;
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
         (tabDev:Devise[])=>{ this.listeDevises =tabDev; 
                              this.initDefault();},
         (err)=>{console.log(err); }
    );
  }

  private initDefault(){
      this.codeMonnaieSource=this.listeDevises[0].code;
      this.codeMonnaieCible=this.listeDevises[1].code;
  }

  constructor(private deviseService : DeviseService) { 

  }

  

}
