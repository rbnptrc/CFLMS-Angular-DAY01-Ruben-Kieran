import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winter-tips',
  templateUrl: './winter-tips.component.html',
  styleUrls: ['./winter-tips.component.scss'],
})
export class WinterTipsComponent implements OnInit {
  winterTripArr = [
    [
      'https://travelslovenia.org/wp-content/uploads/2016/01/lake-jasna-snow-winter.jpg',
      160,
      'Jasna, Slovakia',
    ],
    [
      'https://www.scandi.travel/wp-content/uploads/2014/12/canstockphoto12582526.jpg',
      660,
      'Lapland, Finland',
    ],
    [
      'https://s26561.pcdn.co/wp-content/uploads/2018/03/Swans-and-Lake-Hallstatt-Austria-in-the-Snow-Winter.jpg',
      630,
      'Neuschneher, Austria',
    ],
    [
      'https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1477927085/vakkara-lodge-lapland-LAPLAND0217.jpg?itok=_F8zOYuA',
      650,
      'Abisko, Sweden',
    ],
  ];

  constructor() {}

  ngOnInit(): void {}
}
