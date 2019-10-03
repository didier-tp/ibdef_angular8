import { Component, OnInit } from '@angular/core';
import { TraductionService } from '../common/service/traduction.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public traductionService : TraductionService) { }

  ngOnInit() {
  }

}
