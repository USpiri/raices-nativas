import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidewalkComponent } from './sidewalk.component';

describe('SidewalkComponent', () => {
  let component: SidewalkComponent;
  let fixture: ComponentFixture<SidewalkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidewalkComponent]
    });
    fixture = TestBed.createComponent(SidewalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
