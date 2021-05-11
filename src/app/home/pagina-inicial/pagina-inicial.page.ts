import { Component, OnInit } from '@angular/core';

interface Remedio {
  name: string;
  dose: string;
  hora: string;
}[]

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})
export class PaginaInicialPage implements OnInit {

  ngOnInit() {
  }

  public remedios: Remedio[] = [
    {
      name: 'dipirona',
      dose: "1 pipula",
      hora: '10:30'
    }, {
      name: 'dorflex',
      dose: '1 comprimido',
      hora: '17:00'
    }
  ]


  constructor() { }
  

}
