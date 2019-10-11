import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rekt-season-schedule',
  templateUrl: './season-schedule.component.html',
  styleUrls: ['./season-schedule.component.scss']
})
export class SeasonScheduleComponent implements OnInit {
  slides = [
    {foo: 'bar', image: 'assets/logo.png'},
    {foo: 'bar', image: 'assets/logo.png'},
    {foo: 'bar', image: 'assets/logo.png'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
