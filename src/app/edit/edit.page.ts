import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RemedioService } from '../services/remedio.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage {

    public remedio;
    private originalId;

  constructor(
    route: ActivatedRoute, 
    private remedioService: RemedioService,
    private navCtrl: NavController
    ) { 
    this.originalId = route.snapshot.paramMap.get('id');
    this.remedio = remedioService.findByIdremedio(this.originalId); 
  }

  public saveChanges() {
    this.remedioService.updateByIdremedio(this.originalId, this.remedio);
    this.navCtrl.back();
  }
}