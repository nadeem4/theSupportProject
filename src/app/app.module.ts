import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// app main component
import { AppComponent } from './app.component';

// routing module
import { AppRoutingModule } from './app-routing.module';

// bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { HomePageComponent } from './pages/home-page/home-page.component';

// reusable components
import { ComponentsModule } from './components/components.module';

import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { MissionPageComponent } from './pages/mission-page/mission-page.component';
import { VisionPageComponent } from './pages/vision-page/vision-page.component';
import { OurMeetingPageComponent } from './pages/our-meeting-page/our-meeting-page.component';
import { StoriesPageComponent } from './pages/stories-page/stories-page.component';
import { ResourcesPageComponent } from './pages/resources-page/resources-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsPageComponent,
    MissionPageComponent,
    VisionPageComponent,
    OurMeetingPageComponent,
    StoriesPageComponent,
    ResourcesPageComponent,
  ],
  imports: [
            BrowserModule,
            FormsModule,
            HttpClientModule,
            NgbModule,
            ComponentsModule,
            AppRoutingModule,
            FontAwesomeModule,
            BrowserAnimationsModule
           ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
