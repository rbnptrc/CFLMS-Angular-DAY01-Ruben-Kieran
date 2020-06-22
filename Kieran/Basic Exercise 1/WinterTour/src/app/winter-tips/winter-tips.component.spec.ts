import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterTipsComponent } from './winter-tips.component';

describe('WinterTipsComponent', () => {
  let component: WinterTipsComponent;
  let fixture: ComponentFixture<WinterTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinterTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
