import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { Week } from '@rekt/rekt-league-data';
import { ImageService } from '../services/image.service';
import { MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'rekt-season-schedule',
  templateUrl: './season-schedule.component.html',
  styleUrls: ['./season-schedule.component.scss']
})
export class SeasonScheduleComponent implements OnInit, AfterViewInit {
  @ViewChild('carousel', { static: true }) carousel: MatCarouselComponent;
  @Input() schedule: Week[];
  @Input() abbreviateTeamNames = false;
  constructor(public imageService: ImageService) {}

  ngOnInit() {
    console.log(this.schedule);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // find current week and slide to it
      const today = new Date();
      let currentWeekIndex = 0;
      for (let i = 0; i < this.schedule.length; i++) {
        const week = this.schedule[i];
        const d = new Date(week.date);
        // find first week where today is before the date
        // using local time to avoid off by one error
        if (
          today.getDate() <= d.getDate() &&
          today.getMonth() <= d.getMonth() &&
          today.getFullYear() <= d.getFullYear()
        ) {
          currentWeekIndex = i;
          break;
        }
      }
      this.carousel.slideTo(currentWeekIndex);
    }, 0);
  }
}
