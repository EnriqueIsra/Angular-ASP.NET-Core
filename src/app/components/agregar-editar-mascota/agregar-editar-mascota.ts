import { Component } from '@angular/core';
import { Spinner } from '../../shared/spinner/spinner';
import { MatCard, MatCardSubtitle } from "@angular/material/card";
import {MatGridListModule} from '@angular/material/grid-list';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-agregar-editar-mascota',
  imports: [Spinner, 
    MatCard, 
    MatCardSubtitle, 
    MatGridListModule, 
    MatFormField, MatLabel, 
    MatInput, 
    MatButtonModule, 
    RouterLink],
  templateUrl: './agregar-editar-mascota.html',
  styleUrl: './agregar-editar-mascota.css',
})
export class AgregarEditarMascota {
  loading: boolean = false;
}
