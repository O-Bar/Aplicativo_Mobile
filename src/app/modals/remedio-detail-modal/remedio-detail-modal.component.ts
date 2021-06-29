import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Remedio, RemedioService } from 'src/app/services/remedio.service';


@Component({
  selector: 'app-remedio-detail-modal',
  templateUrl: './remedio-detail-modal.component.html',
  styleUrls: ['./remedio-detail-modal.component.scss'],
})
export class RemedioDetailModalComponent implements OnInit {

  @Input() remedio: Remedio;

  constructor(
    private modalController: ModalController,
    private remedioService: RemedioService
    ) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss();
  }

}
