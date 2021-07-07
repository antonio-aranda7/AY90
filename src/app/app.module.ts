import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosService } from './alumnos/alumnos.service'; 
import { AltaAlumnoComponent } from './alumnos/alta-alumno/alta-alumno.component';
import { ListaAlumnosComponent } from './alumnos/lista-alumnos/lista-alumnos.component'; 
import { DetalleAlumnoComponent } from './alumnos/detalle-alumno/detalle-alumno.component';
@NgModule({
  declarations: [
    AppComponent,
    AltaAlumnoComponent,
    ListaAlumnosComponent,
    DetalleAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [AlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
