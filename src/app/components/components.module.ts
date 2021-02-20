import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClickOutsideModule } from 'ng-click-outside';

// bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// For MDB Angular Free
import {
  CarouselModule,
  ButtonsModule,
  WavesModule,
  CardsModule,
} from 'angular-bootstrap-md';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

// reusable components
import { HeaderNonLoginComponent } from './header-non-login/header-non-login.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeWhatWeOfferComponent } from './home-what-we-offer/home-what-we-offer.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { AboutUsBannerComponent } from './about-us-banner/about-us-banner.component';
import { MissionBannerComponent } from './mission-banner/mission-banner.component';
import { StoriesBannerComponent } from './stories-banner/stories-banner.component';
import { ResourcesBannerComponent } from './resources-banner/resources-banner.component';
import { MeetingBannerComponent } from './meeting-banner/meeting-banner.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
const components = [
  HeaderNonLoginComponent,
  HomeBannerComponent,
  HomeWhatWeOfferComponent,
  ContactCardComponent,
  ContactCardComponent,
  AboutUsBannerComponent,
  MissionBannerComponent,
  StoriesBannerComponent,
  ResourcesBannerComponent,
  MeetingBannerComponent,
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ClickOutsideModule,
    NgbModule,
    CarouselModule,
    WavesModule,
    FontAwesomeModule,
    CardsModule,
    ButtonsModule,
    MatCardModule,
    MatButtonModule,
    ShareButtonsModule,
    ShareIconsModule
  ],
  declarations: [...components],
  exports: [...components],
})
export class ComponentsModule {}
