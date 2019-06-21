import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../services/season.service';
import { TableColumnConfig } from '../table/table-column-config';

@Component({
  selector: 'rekt-season-overview',
  templateUrl: './season-overview.component.html',
  styleUrls: ['./season-overview.component.scss']
})
export class SeasonOverviewComponent implements OnInit {
  count = new Array(50);
  constructor(public seasonService: SeasonService) {}

  standingsTableConfig: TableColumnConfig[] = [
    { key: 'rank', displayName: 'Rank', sortable: true, flexBasis: '15%' },
    { key: 'team', displayName: 'Team', sortable: true },
    { key: 'record', displayName: 'Record' }
  ];
  standingsData = [
    { rank: 1, team: 'Infernal Drake', record: '16-0' },
    { rank: 2, team: 'Red Brambleback', record: '12-4' },
    { rank: 3, team: 'Murk Wolves', record: '12-4' },
    { rank: 4, team: 'Blue Sentinels', record: '9-7' },
    { rank: 5, team: 'Scuttle Crab', record: '8-8' },
    { rank: 6, team: 'Ocean Drake', record: '6-10' },
    { rank: 7, team: 'Air Drake', record: '5-11' },
    { rank: 8, team: 'Mountain Drake', record: '4-12' },
    { rank: 9, team: 'Gromp', record: '0-16' }
  ];
  ngOnInit() {}
}
