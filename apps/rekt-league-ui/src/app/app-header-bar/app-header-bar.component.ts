import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rekt-app-header-bar',
  templateUrl: './app-header-bar.component.html',
  styleUrls: ['./app-header-bar.component.scss']
})
export class AppHeaderBarComponent implements OnInit {
  seasonOpts = ['Season 4', 'Season 3', 'Season 2', 'Season 1'];
  selectedSeason = 'Season 4';
  constructor() { }

  ngOnInit() {
  }

}
