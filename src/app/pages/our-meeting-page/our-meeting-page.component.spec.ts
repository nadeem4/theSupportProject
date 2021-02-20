import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMeetingPageComponent } from './our-meeting-page.component';

describe('OurMeetingPageComponent', () => {
  let component: OurMeetingPageComponent;
  let fixture: ComponentFixture<OurMeetingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurMeetingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurMeetingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
