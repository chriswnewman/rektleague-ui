import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  private currentlySelectedSeason = 5;
  constructor() {}

  getCurrentlySelectedSeason() {
    return this.currentlySelectedSeason;
  }

  setCurrentlySelectedSeason(newSeason: number) {
    this.currentlySelectedSeason = newSeason;
  }
}
