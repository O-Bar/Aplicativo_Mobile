import { Component } from '@angular/core';

interface Remedio {
  name: string;
  done: boolean;
  id: number;
}

@Component({
  selector: 'app-adicionar',
  templateUrl: 'adicionar.page.html',
  styleUrls: ['adicionar.page.scss'],
})
export class AdicionarPage {

  public novoRemedioNome = '';
  public completedPercentage = 0;

  public remedios: Remedio[] = [];
  public filteredRemedios: Remedio[] = this.remedios;
  public currentFilter: 'todos' | 'tomados' | 'para-tomar' = 'todos';
  public currentSearch = '';

  public calculateCompletedPercentage() {
    const completedRemedios = this.remedios.filter(remedio => remedio.done);
    this.completedPercentage = completedRemedios.length / this.remedios.length;
  }

  public addRemedio() {
    const newRemedio = {
      name: this.novoRemedioNome,
      done: false,
      id: new Date().getTime()
    };
    this.remedios.push(newRemedio);
    this.novoRemedioNome = '';
    this.calculateCompletedPercentage();
    this.updateFilter();
  }

  public removeRemedio(id: number) {
    const remedioIndex = this.remedios.findIndex(remedio => remedio.id === id);
    this.remedios.splice(remedioIndex, 1);
    this.updateFilter();
  }

  public updateFilter() {
    let filteredBySegment: Remedio[];
    if (this.currentFilter === 'todos') {
      filteredBySegment = this.remedios;
    } else if (this.currentFilter === 'tomados') {
      filteredBySegment = this.remedios.filter(remedio => remedio.done);
    } else if (this.currentFilter === 'para-tomar') {
      filteredBySegment = this.remedios.filter(remedio => !remedio.done);
    }

    if (this.currentSearch === '') {
      this.filteredRemedios = filteredBySegment;
    } else {
      const lowercase = this.currentSearch.toLowerCase()
      this.filteredRemedios = filteredBySegment.filter(
        task => task.name.toLowerCase().includes(lowercase)
      );
    }
  }

}
  