import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from '../alumno.model';
import { AlumnosService } from '../alumnos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent implements OnInit {

  //Se anula para usar rutas. Ya no es parámetro por directiva
  //@Input() alumno!: Alumno;
  public alumno!: Alumno | undefined;

  constructor(private route: ActivatedRoute, 
      private servicioAlumno: AlumnosService,
      private location: Location) {}

  ngOnInit(): void {
    this.getAlumno();
  }

  getAlumno(): void {
    const id = this.route.snapshot.paramMap.get('nc');
    this.servicioAlumno.getAlumnoPorId(id)
    .subscribe(itemAlum => this.alumno = itemAlum);
  }

  goBack(){
    this.location.back();
  }

}
