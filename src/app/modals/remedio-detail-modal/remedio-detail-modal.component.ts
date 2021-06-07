import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-remedio-detail-modal',
  templateUrl: './remedio-detail-modal.component.html',
  styleUrls: ['./remedio-detail-modal.component.scss'],
})
export class RemedioDetailModalComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss();
  }

}
