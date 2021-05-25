import { Component, OnInit } from '@angular/core';
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


  constructor(private remdioService: RemedioService) {
    this.remedios = this.remdioService.allRemedios;
   }
  

}
