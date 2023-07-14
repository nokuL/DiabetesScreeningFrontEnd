import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserOverviewComponent } from './new-user-overview.component';

describe('NewUserOverviewComponent', () => {
  let component: NewUserOverviewComponent;
  let fixture: ComponentFixture<NewUserOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
