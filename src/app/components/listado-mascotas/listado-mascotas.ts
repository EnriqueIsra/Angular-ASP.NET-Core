import { Component } from '@angular/core';
import { Mascota } from '../../interfaces/Mascota';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';


const ELEMENT_DATA: Mascota[] = [
  {nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13},
  {nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13},
  {nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13},
  {nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13}
];

@Component({
  standalone: true,
  selector: 'app-listado-mascotas',
  imports: [CommonModule, MatTableModule],
  templateUrl: './listado-mascotas.html',
  styleUrl: './listado-mascotas.css',
})
export class ListadoMascotas {
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso'];
  dataSource = ELEMENT_DATA;
}
