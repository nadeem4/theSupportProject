import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesBannerComponent } from './resources-banner.component';

describe('ResourcesBannerComponent', () => {
  let component: ResourcesBannerComponent;
  let fixture: ComponentFixture<ResourcesBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
