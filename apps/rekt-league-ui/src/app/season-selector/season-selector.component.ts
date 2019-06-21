import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SeasonService } from '../services/season.service';

@Component({
  selector: 'rekt-season-selector',
  templateUrl: './season-selector.component.html',
  styleUrls: ['./season-selector.component.css']
})
export class SeasonSelectorComponent implements OnInit, OnChanges {

  seasonOpts = [5,4,3,2,1];
  selectedSeason = 'Season 5';
  @Input() layout: 'sideNav' | 'button' = 'button';

  constructor(public seasonService: SeasonService) { }

  ngOnInit() {
    console.log(this.layout)
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(changes);
  }
}
