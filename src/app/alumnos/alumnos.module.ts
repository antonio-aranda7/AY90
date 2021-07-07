import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AlumnosService } from './alumnos.service';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component'; 

@NgModule({
  declarations: [
    AltaAlumnoComponent,
    ListaAlumnosComponent,
    DetalleAlumnoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [AlumnosService]
})
export class AlumnosModule { }
