import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SeasonService } from '../services/season.service';

@Component({
  selector: 'rekt-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  private SMALL_WIDTH_BREAKPOINT = 768;
  isSmallScreen$: Observable<boolean> = this.breakpointObserver
    .observe(`(max-width: ${this.SMALL_WIDTH_BREAKPOINT}px)`)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    public seasonService: SeasonService
  ) {}
}
