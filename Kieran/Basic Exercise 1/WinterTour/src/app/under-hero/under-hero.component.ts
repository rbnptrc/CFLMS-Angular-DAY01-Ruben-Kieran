import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-hero',
  templateUrl: './under-hero.component.html',
  styleUrls: ['./under-hero.component.scss'],
})
export class UnderHeroComponent implements OnInit {
  bestAtArr = [
    [
      '#',
      'Accommodation',
      'We off the finest selection of top notch hotels anywhere',
    ],
    [
      '#',
      'Transportation',
      "Whether it's about air tickets or shuttle bus, we will set it up!",
    ],
    ['#', 'Seasoned Agents', 'Comined, the experience our agents have is'],
    [
      '#',
      'Easy Trip Planning',
      'Our travel agesnts are always ready to plan your perfect trip!',
    ],
  ];

  constructor() {}

  ngOnInit(): void {}
}
