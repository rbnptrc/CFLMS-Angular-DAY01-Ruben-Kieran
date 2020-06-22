import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-under-hero-items',
  templateUrl: './under-hero-items.component.html',
  styleUrls: ['./under-hero-items.component.scss'],
})
export class UnderHeroItemsComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() title: string;
  @Input() smallText: string;

  constructor() {}

  ngOnInit(): void {}
}
