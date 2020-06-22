import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderHeroItemsComponent } from './under-hero-items.component';

describe('UnderHeroItemsComponent', () => {
  let component: UnderHeroItemsComponent;
  let fixture: ComponentFixture<UnderHeroItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderHeroItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderHeroItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
