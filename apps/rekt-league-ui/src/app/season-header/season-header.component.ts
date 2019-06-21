import { Component, OnInit, Input } from '@angular/core';
import { SeasonService } from '../services/season.service';

@Component({
  selector: 'rekt-season-header',
  templateUrl: './season-header.component.html',
  styleUrls: ['./season-header.component.scss']
})
export class SeasonHeaderComponent implements OnInit {
  @Input() mode: 'season' | 'header' = 'season';
  constructor(public seasonService: SeasonService) {}

  ngOnInit() {}
}
