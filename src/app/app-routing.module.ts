import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { MissionPageComponent } from './pages/mission-page/mission-page.component';
import { OurMeetingPageComponent } from './pages/our-meeting-page/our-meeting-page.component';
import { ResourcesPageComponent } from './pages/resources-page/resources-page.component';
import { StoriesPageComponent } from './pages/stories-page/stories-page.component';
import { VisionPageComponent } from './pages/vision-page/vision-page.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'vision', component: VisionPageComponent },
  { path: 'our-meetings', component: OurMeetingPageComponent },
  { path: 'stories', component: StoriesPageComponent },
  { path: 'resources', component: ResourcesPageComponent },
  { path: 'mission', component: MissionPageComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
