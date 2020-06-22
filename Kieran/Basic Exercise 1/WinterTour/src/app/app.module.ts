import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { UnderHeroComponent } from './under-hero/under-hero.component';
import { WinterTipsComponent } from './winter-tips/winter-tips.component';
import { WinterTipsItemsComponent } from './winter-tips-items/winter-tips-items.component';
import { UnderHeroItemsComponent } from './under-hero-items/under-hero-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    UnderHeroComponent,
    WinterTipsComponent,
    WinterTipsItemsComponent,
    UnderHeroItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
