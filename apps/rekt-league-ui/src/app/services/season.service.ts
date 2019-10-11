import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SeasonOverview } from '@rekt/rekt-league-data';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  // update this when each new season comes out
  public mostRecentSeason = 5;
  private currentlySelectedSeason = 5;

  private _seasonOverview: BehaviorSubject<SeasonOverview> = new BehaviorSubject({} as SeasonOverview);
  public readonly seasonOverview: Observable<SeasonOverview> = this._seasonOverview.asObservable();

  // private season overview data map {1: SeasonOverview} ?

  constructor(private http: HttpClient) {}

  getCurrentlySelectedSeason() {
    return this.currentlySelectedSeason;
  }

  setCurrentlySelectedSeason(newSeason: number) {
    this.currentlySelectedSeason = newSeason;
  }

  getSeasonData(id: number): Promise<SeasonOverview> {
    return this.http
      .get<SeasonOverview>('http://rektleague.com/api/season/' + id)
      .toPromise();
  }

}
