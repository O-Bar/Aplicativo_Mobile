import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalPage } from './final.page';

const routes: Routes = [
  {
    path: '',
    component: FinalPage,
    children:[
      {
        path: 'ajuda',
        loadChildren: () => import('./ajuda/ajuda.module').then( m => m.AjudaPageModule)
      },
      {
        path: 'sobre',
        loadChildren: () => import('../home/sobre/sobre.module').then( m => m.SobrePageModule)
      }
    ]
  }]
 


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalPageRoutingModule {}
