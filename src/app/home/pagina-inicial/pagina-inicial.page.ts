import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RemedioDetailModalComponent } from 'src/app/modals/remedio-detail-modal/remedio-detail-modal.component';
import { Remedio, RemedioService } from 'src/app/services/remedio.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})
export class PaginaInicialPage implements OnInit {

  ngOnInit() {
  }

  public remedios: Remedio[];


  constructor(
     private afa: AngularFireAuth,
     private router: Router,
     private modalController: ModalController,
     private remedioService: RemedioService
     ) {
    this.remedios = this.remedioService.allRemedios;
   }


  public async logout(){
    await this.afa.signOut();
    this.router.navigateByUrl('/login')

  }

  public async openModal(remedio : Remedio){
    const modal = await this.modalController.create({
      component: RemedioDetailModalComponent,
      componentProps: {
        remedio : remedio
      }
    });
    modal.present();
  }

}
