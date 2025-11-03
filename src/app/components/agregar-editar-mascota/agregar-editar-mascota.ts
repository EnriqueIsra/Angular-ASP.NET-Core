import { Component } from '@angular/core';
import { Spinner } from '../../shared/spinner/spinner';
import { MatCard, MatCardSubtitle } from "@angular/material/card";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from "@angular/router";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Mascota } from '../../interfaces/Mascota';


@Component({
  selector: 'app-agregar-editar-mascota',
  imports: [Spinner,
    MatCard,
    MatCardSubtitle,
    MatGridListModule,
    MatFormField, MatLabel,
    MatInput,
    MatButtonModule,
    RouterLink,
    ReactiveFormsModule],
  templateUrl: './agregar-editar-mascota.html',
  styleUrl: './agregar-editar-mascota.css',
})
export class AgregarEditarMascota {
  loading: boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      color: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', Validators.required],
    })
  }

  agregarMascota() {

    const mascota: Mascota = {
      nombre: this.form.value.nombre,
      raza: this.form.value.raza,
      color: this.form.value.color,
      edad: this.form.value.edad,
      peso: this.form.value.peso,
    }
    console.log(mascota)
  }
}
