import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-hero',
  templateUrl: './under-hero.component.html',
  styleUrls: ['./under-hero.component.scss'],
})
export class UnderHeroComponent implements OnInit {
  bestAtArr = [
    [
      'https://cdn4.iconfinder.com/data/icons/hotel-accommodation-vacation-service-vol-4/512/hotel_service_room_trip_acomodation_vacation_-_11-512.png',
      'Accommodation',
      'We off the finest selection of top notch hotels anywhere',
    ],
    [
      'https://image.flaticon.com/icons/png/512/190/190190.png',
      'Transportation',
      "Whether it's about air tickets or shuttle bus, we will set it up!",
    ],
    [
      'https://cdn0.iconfinder.com/data/icons/office-signals/48/secretary-512.png',
      'Seasoned Agents',
      'Combined, the experience our agents have is',
    ],
    [
      'https://image.flaticon.com/icons/png/512/567/567014.png',
      'Easy Trip Planning',
      'Our travel agesnts are always ready to plan your perfect trip!',
    ],
  ];

  constructor() {}

  ngOnInit(): void {}
}
