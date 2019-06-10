import { Component } from '@angular/core';
import {Team} from './team/team.model';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {

  lv: boolean; //Login visible
  cv: boolean; //Create visible
  login:boolean=false;
  team: Team;

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

  Create(id:HTMLInputElement, leader:HTMLInputElement, demol:HTMLInputElement, assault:HTMLInputElement):void{
    this.team.Id=id.value;
    this.team.Leader=leader.value;
    this.team.Demol=demol.value;
    this.team.Assault=assault.value;
    this.login=true;
    //return false;
  }

  Login():boolean{
    return false;
  }
}
