import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard,  redirectUnauthorizedTo } from '@angular/fire/auth-guard'
import { PaginaInicialPage } from './pagina-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaInicialPage,
    canActivate: [AngularFireAuthGuard],
    data : { authGuardPipe: () => redirectUnauthorizedTo('/login')}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaInicialPageRoutingModule {}
