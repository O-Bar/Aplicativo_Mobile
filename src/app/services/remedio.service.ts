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
   if (remedios) {
    this.allRemedios.push(...remedios);
   }
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
    

  public findByIdremedio (id: number){
    return { ...this.allRemedios.find(r => r.id === id)}
  }

  public updateByIdremedio(remedio: number, newData: Remedio){
    const currentRemedio = this.allRemedios.find(r => r.id === id);
    currentRemedio.name = newData.name;
    currentRemedio.dose = newData.dose;
    currentRemedio.hora = newData.hora;
  }
}
