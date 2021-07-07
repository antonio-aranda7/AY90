import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaAlumnoComponent } from './alumnos/alta-alumno/alta-alumno.component';
import { DetalleAlumnoComponent } from './alumnos/detalle-alumno/detalle-alumno.component';
import { ListaAlumnosComponent } from './alumnos/lista-alumnos/lista-alumnos.component';

const routes: Routes = [
  { path: 'lista', component: ListaAlumnosComponent },
  { path: 'detalle/:nc', component: DetalleAlumnoComponent },
  { path: 'alta', component: AltaAlumnoComponent },
  { path: '', redirectTo: '/alta', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
