import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterTipsItemsComponent } from './winter-tips-items.component';

describe('WinterTipsItemsComponent', () => {
  let component: WinterTipsItemsComponent;
  let fixture: ComponentFixture<WinterTipsItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinterTipsItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterTipsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
