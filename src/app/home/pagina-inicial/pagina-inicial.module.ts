import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaInicialPageRoutingModule } from './pagina-inicial-routing.module';

import { PaginaInicialPage } from './pagina-inicial.page';

import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaInicialPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [PaginaInicialPage]
})
export class PaginaInicialPageModule {}
