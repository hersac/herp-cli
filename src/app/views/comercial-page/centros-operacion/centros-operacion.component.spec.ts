import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosOperacionComponent } from './centros-operacion.component';

describe('CentrosOperacionComponent', () => {
  let component: CentrosOperacionComponent;
  let fixture: ComponentFixture<CentrosOperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentrosOperacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentrosOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
