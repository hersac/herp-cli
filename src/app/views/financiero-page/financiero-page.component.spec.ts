import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancieroPageComponent } from './financiero-page.component';

describe('FinancieroPageComponent', () => {
  let component: FinancieroPageComponent;
  let fixture: ComponentFixture<FinancieroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancieroPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancieroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
