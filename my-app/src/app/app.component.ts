import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  onChangementHumeur(evt:any){
    let message = "changementHumeur:" + evt.value;
    console.log(message);
    alert(message);
  }
}
