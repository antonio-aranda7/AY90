import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno.model';
import { AlumnosService } from '../alumnos.service';
import { DetalleAlumnoComponent } from '../detalle-alumno/detalle-alumno.component';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})

export class ListaAlumnosComponent implements OnInit {
  public listaAlumnos!: Alumno[];
  //public alumnoSeleccionado!: Alumno;

  constructor(private servicioAlumno: AlumnosService) {}

  ngOnInit(): void { 
    this.listaAlumnos = this.servicioAlumno.getAlumnos();
  }

  /*
  onSelect(alum: Alumno){
      this.alumnoSeleccionado = alum;
  }
  */
}
