import { Component, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { ListadoMascotas } from "./components/listado-mascotas/listado-mascotas";
import { MatTableModule } from '@angular/material/table';



@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, MatSliderModule, ListadoMascotas, MatTableModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FE-CRUDMascotas');
}
