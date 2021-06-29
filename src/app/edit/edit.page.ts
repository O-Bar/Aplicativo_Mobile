import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RemedioService } from '../services/remedio.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

    public remedio;

    constructor(
      route: ActivatedRoute, 
      private remedioService: RemedioService,
      private navCtrl:NavController
      ) {
      const id = +route.snapshot.paramMap.get('id');
      this.remedio = this.remedioService.get(id);
      
      console.log (this.remedio)
    }

    ngOnInit() {
    }

    onClick() {
      this.remedioService.update(this.remedio);
      this.navCtrl.back();
      console.log (this.remedio)
    }
}