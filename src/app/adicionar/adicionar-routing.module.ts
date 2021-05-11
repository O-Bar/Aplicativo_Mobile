import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarPage } from './adicionar.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarPageRoutingModule {}
