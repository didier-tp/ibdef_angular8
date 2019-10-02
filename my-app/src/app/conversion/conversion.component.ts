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
    this.montantConverti =
    this.deviseService.convertir(this.montant, 
                                this.codeMonnaieSource, 
                                this.codeMonnaieCible);
  }

  ngOnInit() {
    this.listeDevises = this.deviseService.getDevises();
  }

  constructor(private deviseService : DeviseService) { 

  }

  

}
