import { Injectable } from '@angular/core';

export interface Remedio {
    name: string;
    dose: string;
}

@Injectable({
  providedIn: 'root'
})
export class RemedioService {

  public allRemedios: Remedio[] = [];

  constructor() { }

  public addRemedio(newRemedio: Remedio) {
    this.allRemedios.push(newRemedio);
  }

  

}
