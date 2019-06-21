import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'rekt-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.scss']
})
export class SideNavContentComponent implements OnInit {
  @Input() isSmallScreen$: Observable<boolean>;
  constructor() {}

  ngOnInit() {}

  goToTwitter() {
    window.open('https://twitter.com/therektleague', '_blank');
  }
  goToYoutube() {
    window.open(
      'https://www.youtube.com/channel/UC79qzlDqxImPG49FKiChe0Q',
      '_blank'
    );
  }
  goToTwitch() {
    window.open('https://twitch.tv/therektleague', '_blank');
  }
  goToInstagram() {
    window.open('https://instagram.com/therektleague', '_blank');
  }
}
