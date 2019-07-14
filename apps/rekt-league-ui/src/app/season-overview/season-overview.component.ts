import { Component, OnInit, OnDestroy } from '@angular/core';
import { SeasonService } from '../services/season.service';
import { TableColumnConfig } from '../table/table-column-config';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rekt-season-overview',
  templateUrl: './season-overview.component.html',
  styleUrls: ['./season-overview.component.scss']
})
export class SeasonOverviewComponent implements OnInit, OnDestroy {
  count = new Array(50);
  routeSub: Subscription;
  constructor(
    public seasonService: SeasonService,
    private route: ActivatedRoute
  ) {}

  standingsData: any[];

  standingsTableConfig: TableColumnConfig[] = [
    { key: 'rank', displayName: 'Rank', sortable: true, flexBasis: '20%' },
    { key: 'team', displayName: 'Team', sortable: true, flexBasis: '60%' },
    { key: 'record', displayName: 'Record' }
  ];

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.seasonService.setCurrentlySelectedSeason(params.seasonId);
      this.updatePageData();
    });
    this.updatePageData();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  private updatePageData() {
    this.seasonService
      .getSeasonData(this.seasonService.getCurrentlySelectedSeason())
      .then((res: any) => {
        console.log(res);
        this.standingsData = res.standings.map(obj => {
          // temporary fix until custom cell is implemented
          obj.team = obj.team.name;

          obj.record = obj.wins + '-' + obj.losses;
          return obj;
        });
      })
      .catch(err => {
        this.seasonService
          .getSeasonData(this.seasonService.mostRecentSeason)
          .then((res: any) => {
            this.standingsData = res.standings.map(obj => {
              // temporary fix until custom cell is implemented
              obj.team = obj.team.name;

              obj.record = obj.wins + '-' + obj.losses;
              return obj;
            });
          });
      });
  }
}
