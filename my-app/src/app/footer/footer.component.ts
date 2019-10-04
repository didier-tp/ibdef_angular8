import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';
import { TraductionService } from '../common/service/traduction.service';
import { OnlineOfflineService } from '../common/service/online-offline.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  onLine: boolean;
  humeur : string = "bonneHumeur"; //par défaut
  listeHumeurs : string[] = [ "bonneHumeur", "mauvaiseHumeur"] ;

  @Output()
  public changementHumeur : EventEmitter<{value:string}> = new EventEmitter<{value:string}>(); 

  onChangeHumeur(){
    this.changementHumeur.emit({value:this.humeur});
  }

  constructor(public preferencesService : PreferencesService,
              public onlineOfflineService : OnlineOfflineService,
              public traductionService : TraductionService) {
    //injection de dépendance automatique de this.preferencesService
  }


  ngOnInit() {
    this.onlineOfflineService.connectionChanged
        .subscribe( (onLine)=>{this.onLine = onLine;})
  }

}
