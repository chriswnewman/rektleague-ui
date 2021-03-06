import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SeasonService } from '../services/season.service';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'rekt-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.scss']
})
export class SideNavContentComponent {
  @Input() isSmallScreen$: Observable<boolean>;
  constructor(public seasonService: SeasonService, private imageService: ImageService) {}

  socialMediaLinks: {
    imgSrc: string;
    clickFunction: any;
    tooltip: string;
  }[] = [
    {
      imgSrc: this.imageService.imageUrlBase + '/media/stats/media_icons/twitter.png',
      clickFunction: this.goToTwitter,
      tooltip: 'Follow On Twitter'
    },
    {
      imgSrc: this.imageService.imageUrlBase + '/media/stats/media_icons/twitch.png',
      clickFunction: this.goToTwitch,
      tooltip: 'Follow On Twitch'
    },
    {
      imgSrc: this.imageService.imageUrlBase + '/media/stats/media_icons/youtube.png',
      clickFunction: this.goToYoutube,
      tooltip: 'Follow On YouTube'
    },
    {
      imgSrc: this.imageService.imageUrlBase + '/media/stats/media_icons/instagram.png',
      clickFunction: this.goToInstagram,
      tooltip: 'Follow On Instagram'
    }
  ];
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
