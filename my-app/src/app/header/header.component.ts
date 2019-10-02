import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

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

  constructor(public preferencesService : PreferencesService) {
    //injection de dépendance automatique de this.preferencesService
    console.log("constructeur de HeaderComponent appelé");
   }

  ngOnInit() {
    console.log("ngOnInit appelé");
  }

}
