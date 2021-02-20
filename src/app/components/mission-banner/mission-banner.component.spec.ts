import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionBannerComponent } from './mission-banner.component';

describe('MissionBannerComponent', () => {
  let component: MissionBannerComponent;
  let fixture: ComponentFixture<MissionBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
