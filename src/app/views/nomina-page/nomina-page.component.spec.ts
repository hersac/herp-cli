import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominaPageComponent } from './nomina-page.component';

describe('NominaPageComponent', () => {
  let component: NominaPageComponent;
  let fixture: ComponentFixture<NominaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NominaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NominaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
