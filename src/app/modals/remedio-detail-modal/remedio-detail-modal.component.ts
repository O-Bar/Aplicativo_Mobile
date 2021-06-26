import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Remedio, RemedioService } from 'src/app/services/remedio.service';


@Component({
  selector: 'app-remedio-detail-modal',
  templateUrl: './remedio-detail-modal.component.html',
  styleUrls: ['./remedio-detail-modal.component.scss'],
})
export class RemedioDetailModalComponent {

  @Input() remedio: Remedio;

  constructor(
    private modalController: ModalController,
    private remedioService: RemedioService
    ) { }

  

  closeModal(){
    this.modalController.dismiss();
  }

  deleteRemedio(){
    this.remedioService.removeRemedio(this.remedio);
    this.modalController.dismiss();
  }

}
