import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../services/season.service';

@Component({
  selector: 'rekt-season-header',
  templateUrl: './season-header.component.html',
  styleUrls: ['./season-header.component.scss']
})
export class SeasonHeaderComponent implements OnInit {

  constructor(public seasonService: SeasonService) { }

  ngOnInit() {
  }

}
