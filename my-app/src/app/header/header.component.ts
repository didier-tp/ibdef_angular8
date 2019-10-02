import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , OnChanges {
  
  ngOnChanges(): void {
    console.log("ngOnChanges() appelé")
  }

  @Input()
  titre : string = "default title";

  constructor() {
    console.log("constructeur de HeaderComponent appelé");
   }

  ngOnInit() {
    console.log("ngOnInit appelé");
  }

}
