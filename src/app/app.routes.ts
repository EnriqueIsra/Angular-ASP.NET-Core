import { Routes } from '@angular/router';
import { ListadoMascotas } from './components/listado-mascotas/listado-mascotas';
import { AgregarEditarMascota } from './components/agregar-editar-mascota/agregar-editar-mascota';
import { VerMascota } from './components/ver-mascota/ver-mascota';

export const routes: Routes = [
    { path: 'listMascotas', component: ListadoMascotas, title: 'Listado de Mascotas' },
    { path: 'agregarMascota', component: AgregarEditarMascota, title: 'Agregar Mascota' },
    { path: 'editarMascota/:id', component: AgregarEditarMascota, title: 'Editar Mascota'},
    { path: 'verMascota/:id', component: VerMascota, title: 'Ver Mascota'},
    { path: '', redirectTo: 'listMascotas', pathMatch: 'full'},
    { path: '**', redirectTo: 'listMascotas', pathMatch: 'full'} // sirve para redireccionar a el componente ListadoMascotas si el usuario ingresa una ruta que no existe
];
