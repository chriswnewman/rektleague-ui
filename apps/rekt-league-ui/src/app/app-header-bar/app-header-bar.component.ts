import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDrawer } from '@angular/material';
import { SeasonService } from '../services/season.service';

@Component({
  selector: 'rekt-app-header-bar',
  templateUrl: './app-header-bar.component.html',
  styleUrls: ['./app-header-bar.component.scss']
})
export class AppHeaderBarComponent implements OnInit {
  @Input() isSmallScreen$: Observable<boolean>;
  @Input() drawer: MatDrawer;

  constructor(public seasonService: SeasonService) {}

  ngOnInit() {}
}
