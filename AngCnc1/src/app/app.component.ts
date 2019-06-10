import { Component } from '@angular/core';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {

  lv: boolean; //Login visible
  cv: boolean; //Create visible

  Mstrlgn():boolean{
    this.lv=true;
    this.cv=false;
    return false;
  }

   Mstrcrt():boolean{
    this.cv=true;
    this.lv=false;
    return false;
  }
}
