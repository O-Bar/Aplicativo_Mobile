import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaInicialPageRoutingModule } from './pagina-inicial-routing.module';

import { PaginaInicialPage } from './pagina-inicial.page';
import { RemedioDetailModalComponent } from 'src/app/modals/remedio-detail-modal/remedio-detail-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaInicialPageRoutingModule
  ],
  declarations: [PaginaInicialPage, RemedioDetailModalComponent]
})
export class PaginaInicialPageModule {}
