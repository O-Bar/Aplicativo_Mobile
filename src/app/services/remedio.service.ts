import { Injectable } from '@angular/core';

export interface Remedio {
  name: string;
  dose: string;
  hora: string;
}

@Injectable({
  providedIn: 'root'
})
export class RemedioService {

  public allRemedios: Remedio[] = [
    {
      name: 'dipirona',
      dose: "1 pipula",
      hora: '10h30'
    }, {
      name: 'dorflex',
      dose: '1 comprimido',
      hora: '17h00'
    }
  ];

  constructor() { }

  public addRemedio(newRemedio: Remedio){
    this.allRemedios.push(newRemedio);
  }
}
