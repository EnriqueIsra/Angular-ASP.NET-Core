import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMascota } from './ver-mascota';

describe('VerMascota', () => {
  let component: VerMascota;
  let fixture: ComponentFixture<VerMascota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerMascota]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerMascota);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
