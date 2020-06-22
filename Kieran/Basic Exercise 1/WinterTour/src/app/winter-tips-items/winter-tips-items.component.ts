import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-winter-tips-items',
  templateUrl: './winter-tips-items.component.html',
  styleUrls: ['./winter-tips-items.component.scss'],
})
export class WinterTipsItemsComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() price: number;
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
