import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'pagina-inicial',
        loadChildren: () => import('./pagina-inicial/pagina-inicial.module').then( m => m.PaginaInicialPageModule)
      },
      {
        path: 'calendario',
        loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
      },
      {
        path: 'adicionar',
        loadChildren: () => import('./adicionar/adicionar.module').then( m => m.AdicionarPageModule)
      },
      {
        path: 'ajuda',
        loadChildren: () => import('./ajuda/ajuda.module').then( m => m.AjudaPageModule)
      },
      {
        path: 'sobre',
        loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
      }
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
