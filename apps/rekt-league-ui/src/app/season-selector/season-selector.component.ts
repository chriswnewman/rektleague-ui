import { Component, OnInit, Input } from '@angular/core';
import { SeasonService } from '../services/season.service';
import { Router } from '@angular/router';

@Component({
  selector: 'rekt-season-selector',
  templateUrl: './season-selector.component.html',
  styleUrls: ['./season-selector.component.css']
})
export class SeasonSelectorComponent implements OnInit {
  seasonOpts = [4, 3, 2, 1];
  selectedSeason = 'Season 5';
  @Input() layout: 'sideNav' | 'button' = 'button';

  constructor(public seasonService: SeasonService, private router: Router) {}

  ngOnInit() {}

  goToSeason(id: number) {
    this.router.navigate(['season', id]);
  }
}
