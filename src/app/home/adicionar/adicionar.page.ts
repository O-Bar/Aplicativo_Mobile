import { Component } from '@angular/core';

interface Remedio{
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

  public NovoRemedioNome = ''; 
  public completedPercentage = 0;

  public remedios: Remedio[] = []; 
  public filteredRemedios: Remedio[] = this.remedios; 
  public currentFilter: 'todos' | 'tomados' | 'para-tomar' = 'todos';
  public currentSearch = '';
  
  public calculateCompletedPercentage() {
    let completedAmount = 0;
    for (let i = 0; i < this.remedios.length; i++) { 
      if (this.remedios[i].done) { 
        completedAmount++;
      }
    }
    this.completedPercentage = completedAmount / this.remedios.length;

  }

  public adicionaRemedio() { 
    const novoRemedio = {
      name: this.NovoRemedioNome, 
      done: false,
      id: new Date().getTime() 
    }
    this.remedios.push(novoRemedio); 
    this.NovoRemedioNome= ''; 
    this.calculateCompletedPercentage();
    this.updateFilter();
  }

  public removeRemedio(id: number) { 
    const RemedioIndex = this.remedios.findIndex(Remedio => Remedio.id === id); 
    this.remedios.splice(RemedioIndex, 1);
     
    this.updateFilter();
  }

  public updateFilter() {
    let filteredBySegment: Remedio[];
    if (this.currentFilter === 'todos') {
      filteredBySegment = this.remedios; 
    } else if (this.currentFilter === 'tomados') {
      filteredBySegment = this.remedios.filter(Remedio => Remedio.done);
    } else if (this.currentFilter === 'para-tomar') {
      filteredBySegment = this.remedios.filter(Remedio => !Remedio.done); 
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