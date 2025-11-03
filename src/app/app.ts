import { Component, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { ListadoMascotas } from "./components/listado-mascotas/listado-mascotas";
import { MatTableModule } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, MatSliderModule, ListadoMascotas, MatTableModule, RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  template: `
  <h1>Mi aplicación Angular</h1>
    <router-outlet></router-outlet>
    `
})
export class App {
  protected readonly title = signal('FE-CRUDMascotas');
}
