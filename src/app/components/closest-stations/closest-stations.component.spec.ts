import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosestStationsComponent } from './closest-stations.component';

describe('ClosestStationsComponent', () => {
  let component: ClosestStationsComponent;
  let fixture: ComponentFixture<ClosestStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosestStationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosestStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
