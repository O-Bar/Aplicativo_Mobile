import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss'],
})
export class ListModalComponent  {

  constructor(private modalController: ModalController) { }

  dismissModal(){
    this.modalController.dismiss()
  }

}
