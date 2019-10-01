import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.scss']
})
export class TvaComponent implements OnInit {

  ht: number=200;
  taux : number = 20; //20% par defaut
  tva : number;
  ttc : number;

  listeTaux : number[] = [ 5 , 10 , 20];

  onCalculerTva(){
    this.tva = this.ht * this.taux / 100;
    this.ttc = Number(this.ht) + this.tva;
  }

  constructor() { }

  ngOnInit() {
  }

}
