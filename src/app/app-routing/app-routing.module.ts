import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ListadoComponent } from '../listado/listado.component';

const routes: Routes= [
  {path:'movies', component: ListadoComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
  exports: [RouterModule]
})
export class AppRoutingModule { }
