import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Remedio {
  name: string;
  dose: string;
  hora: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class RemedioService {

  public allRemedios: Remedio[] = [];

  constructor(private storage: Storage) {
    this.loadFromStorage();
   }

  private async loadFromStorage(){
   const remedios = await this.storage.get('remedios') as Remedio[];
   this.allRemedios.push(...remedios);
  }

  public addRemedio(newRemedio: Remedio){
    this.allRemedios.push(newRemedio);

    this.storage.set('remedios', this.allRemedios);
  }

  public removeRemedio(id: number){
    const remedioIndex = this.allRemedios.findIndex(remedio => remedio.id === id);
    this.allRemedios.splice(remedioIndex, 1);
    this.storage.set('remedios', this.allRemedios);
  }
    

}
