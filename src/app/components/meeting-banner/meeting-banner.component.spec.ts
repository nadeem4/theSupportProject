import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingBannerComponent } from './meeting-banner.component';

describe('MeetingBannerComponent', () => {
  let component: MeetingBannerComponent;
  let fixture: ComponentFixture<MeetingBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
