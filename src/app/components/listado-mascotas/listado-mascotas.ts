import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Mascota } from '../../interfaces/Mascota';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';




const listMascotas: Mascota[] = [
  {nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13},
  {nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13},
  {nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13},
  {nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13},
  {nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13},
  {nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13},
  {nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13},
  {nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13},
  {nombre: 'Mimous Hermosous', edad: 4, raza: 'Gato Peludo', color: 'Negro', peso: 10}
  
];

@Component({
  standalone: true,
  selector: 'app-listado-mascotas',
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule, CommonModule],
  templateUrl: './listado-mascotas.html',
  styleUrls: ['./listado-mascotas.css'],
})
export class ListadoMascotas implements AfterViewInit{
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso'];
  dataSource = new MatTableDataSource<Mascota>(listMascotas);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items por página'
    this.dataSource.sort = this.sort;
  }
}

