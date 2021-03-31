import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { IntroComponent } from './intro/intro.component'
import { BuscarComponent} from './buscar/buscar.component'
import { from } from 'rxjs';

const routes: Routes = [
  {path:'movies', component: ListadoComponent},
  {path:'intro', component: IntroComponent},
  {path:'buscar', component: BuscarComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
