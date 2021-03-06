import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';
import { OnlineOfflineService } from '../common/service/online-offline.service';

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

  constructor(public preferencesService : PreferencesService,
              public onlineOfflineService : OnlineOfflineService) {
    //injection de dépendance automatique de this.preferencesService
    console.log("constructeur de HeaderComponent appelé");
   }

   textColor : string = "blue"; //blue si onLine , red si "offLine"

  ngOnInit() {
    console.log("ngOnInit appelé");
    this.onlineOfflineService.connectionChanged
        .subscribe( (onLine)=>{ if(onLine) this.textColor = "blue";
                                  else this.textColor = "red" ;})
  }

}
