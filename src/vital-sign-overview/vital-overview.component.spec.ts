import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalOverviewComponent } from './vital-overview.component';

describe('LostItemOverviewComponent', () => {
  let component: VitalOverviewComponent;
  let fixture: ComponentFixture<VitalOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitalOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
