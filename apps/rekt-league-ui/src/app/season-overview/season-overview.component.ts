import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rekt-season-overview',
  templateUrl: './season-overview.component.html',
  styleUrls: ['./season-overview.component.scss']
})
export class SeasonOverviewComponent implements OnInit {
  count = new Array(50);
  constructor() { }

  ngOnInit() {
  }

}
