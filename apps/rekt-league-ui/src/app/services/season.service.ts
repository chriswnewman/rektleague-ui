import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  // update this when each new season comes out
  public mostRecentSeason = 4;

  private currentlySelectedSeason = 4;
  constructor(private http: HttpClient) {}

  getCurrentlySelectedSeason() {
    return this.currentlySelectedSeason;
  }

  setCurrentlySelectedSeason(newSeason: number) {
    this.currentlySelectedSeason = newSeason;
  }

  getSeasonData(id: number) {
    return this.http.get('http://rektleague.com/season_test/' + id).toPromise();
  }
}
