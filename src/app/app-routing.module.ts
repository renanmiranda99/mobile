import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListaPaisesComponent } from './paises/lista-paises/lista-paises.component';
import { ApiUsadaComponent } from './api-usada/api-usada.component';

const routes: Routes = [
  {path: 'api', component: ApiUsadaComponent },
  {path:'paises', component: ListaPaisesComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

