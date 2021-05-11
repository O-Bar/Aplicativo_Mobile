import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RemedioService } from '../services/remedio.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})
export class AdicionarPage implements OnInit {

  public emptyRemedio = {
    name: '',
    dose: '',
    hora: ''
  };
  constructor(
    private remedioService: RemedioService,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
  }

  createRemedio(){
    this.remedioService.addRemedio(this.emptyRemedio);
    this.navCtrl.back();
  }

}