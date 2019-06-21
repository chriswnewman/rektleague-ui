import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'rekt-app-header-bar',
  templateUrl: './app-header-bar.component.html',
  styleUrls: ['./app-header-bar.component.scss']
})
export class AppHeaderBarComponent implements OnInit, OnChanges {

  @Input() isSmallScreen$: Observable<boolean>;
  @Input() drawer: MatDrawer;
  seasonOpts = ['Season 5', 'Season 4', 'Season 3', 'Season 2', 'Season 1'];
  selectedSeason = 'Season 5';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
