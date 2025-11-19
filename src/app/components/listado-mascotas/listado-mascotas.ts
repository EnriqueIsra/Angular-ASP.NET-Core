import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { Mascota } from '../../interfaces/Mascota';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Spinner } from "../../shared/spinner/spinner";
import { HttpClientModule } from '@angular/common/http';
import { MascotaService } from '../../services/mascota';
import { error } from 'console';


@Component({
  standalone: true,
  selector: 'app-listado-mascotas',
  imports: [CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    RouterLink,
    Spinner],
  templateUrl: './listado-mascotas.html',
  styleUrls: ['./listado-mascotas.css'],
})
export class ListadoMascotas implements AfterViewInit {
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso', "acciones"];
  dataSource = new MatTableDataSource<Mascota>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar, private _mascotaService: MascotaService) { };

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    if (this.dataSource.data.length > 0) {
      this.paginator._intl.itemsPerPageLabel = 'Items por página'
    }

    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.obtenerMascotas();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obtenerMascotas() {
    this.loading = true;
    this._mascotaService.getMascotas().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
    }, /* error => {
      this.loading = false
      alert("ups, ocurrio un error")
    } */
    )
  }

  eliminarMascota() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this._snackBar.open('Mascota Eliminada con Éxito', '', {
        duration: 4000,
        horizontalPosition: 'right'
      });
    }, 3000);
  }
}

