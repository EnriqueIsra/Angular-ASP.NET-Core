import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarMascota } from './agregar-editar-mascota';

describe('AgregarEditarMascota', () => {
  let component: AgregarEditarMascota;
  let fixture: ComponentFixture<AgregarEditarMascota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEditarMascota]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarMascota);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
