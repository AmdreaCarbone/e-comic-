import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimborsiComponent } from './rimborsi.component';

describe('RimborsiComponent', () => {
  let component: RimborsiComponent;
  let fixture: ComponentFixture<RimborsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RimborsiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RimborsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
