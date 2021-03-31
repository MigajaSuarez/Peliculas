//Componente que muestra el listado de peliculas

import { Component, HostListener, OnInit } from '@angular/core';
import {MOVIES} from './../movies/mock-movies';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  movies= MOVIES;



  constructor() { }

  ngOnInit(): void {
  }
  
// funcionalidad de borrar pelicula
  deleteMovie(){

  }
}

