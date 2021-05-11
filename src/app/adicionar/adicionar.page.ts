import { Component } from '@angular/core';

interface Remedio {
  name: string;
  dose: string;
  hora: Date;
  done: boolean;
  id: number;
}

@Component({
  selector: 'app-adicionar',
  templateUrl: 'adicionar.page.html',
  styleUrls: ['adicionar.page.scss'],
})
export class AdicionarPage {

  public emptyRemedio = {
    name: '',
    dose: '',
    hora: ''
  };

  public novoRemedioNome = '';
  public novaDoseRemedio = '';
  public novaHoraRemedio;


  public remedios: Remedio[] = [];
 


  public addRemedio() {
    const newRemedio = {
      name: this.novoRemedioNome,
      dose: this.novaDoseRemedio,
      hora: this.novaHoraRemedio,
      done: false,
      id: new Date().getTime()
    };
    this.remedios.push(newRemedio);
    this.novoRemedioNome = '';
  }

  public removeRemedio(id: number) {
    const remedioIndex = this.remedios.findIndex(remedio => remedio.id === id);
    this.remedios.splice(remedioIndex, 1);
  }

}
  