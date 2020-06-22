import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  heroText_large: string;
  heroText_small: string;

  constructor() {
    this.heroText_large = 'We are your ultimate Winter experience Provider!';
    this.heroText_small =
      'With hundreds of winter holiday destinations, we are you natural choice for planning it all out';
  }

  ngOnInit(): void {}
}
