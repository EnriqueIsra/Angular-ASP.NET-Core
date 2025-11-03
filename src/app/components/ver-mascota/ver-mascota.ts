import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'app-ver-mascota',
  imports: [MatCardModule, RouterLink, MatButtonModule, MatSnackBarModule],
  templateUrl: './ver-mascota.html',
  styleUrl: './ver-mascota.css',
})
export class VerMascota {

}
