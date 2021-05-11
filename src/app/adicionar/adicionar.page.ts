import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Remedio, RemedioService } from 'src/app/services/remedio.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: 'adicionar.page.html',
  styleUrls: ['adicionar.page.scss'],
})
export class AdicionarPage {

  public emptyRemedio = {
    name: '',
    dose: ''
  };

  constructor(
    private remedioService: RemedioService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  createRemedio() { 
    this.remedioService.addRemedio(this.emptyRemedio);
    this.navCtrl.back();
  }

}
  