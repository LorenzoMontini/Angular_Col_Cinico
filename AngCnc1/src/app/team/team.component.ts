import { Component, OnInit, Input } from '@angular/core';
import {Team} from './team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() team:Team;

}
