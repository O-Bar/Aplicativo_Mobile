import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Remedio {
  name: string;
  dose: string;
  hora: string;
}

@Injectable({
  providedIn: 'root'
})
export class RemedioService {

  public allRemedios: Remedio[] = [];

  constructor(private storage: Storage) {
    this.loadFromStorage();
  }
  private async loadFromStorage() {
    const remedios = await this.storage.get('contacts') as Remedio[];
    if (remedios) {
      this.allRemedios.push(...remedios);
    }
  }

  public addRemedio(newRemedio: Remedio){
    this.allRemedios.push(newRemedio);
    this.storage.set('remedios', this.allRemedios)
  }
}
