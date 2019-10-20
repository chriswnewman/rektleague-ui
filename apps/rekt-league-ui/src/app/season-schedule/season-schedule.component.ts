import { Component, OnInit, Input } from '@angular/core';
import { Week } from '@rekt/rekt-league-data';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'rekt-season-schedule',
  templateUrl: './season-schedule.component.html',
  styleUrls: ['./season-schedule.component.scss']
})
export class SeasonScheduleComponent implements OnInit {
  @Input() schedule: Week[];
  constructor(public imageService: ImageService) { }

  ngOnInit() {
    console.log(this.schedule);
  }

}
