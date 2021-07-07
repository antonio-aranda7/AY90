import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alumno } from './alumno.model';

@Injectable({
  providedIn: 'root'
})

export class AlumnosService {

  private alumnos!: Alumno[];

  constructor() { this.alumnos = []; }

  getAlumnos() {
    return this.alumnos;
  }

  getAlumnoPorId(dni: string | null): Observable<Alumno | undefined>{
    //Regresar el alumno que tenga el dni proporcionado
    return of(this.alumnos.find(alum => alum.dni === dni));
  }


  agregarAlumno(alum: Alumno) {
    this.alumnos.push(alum);
  }

  nuevoAlumno(): Alumno {
    return {
      dni: '',
      nombre: '',
      nota1: 0,
      nota2: 0,
      nota3: 0
    };
  }

}
