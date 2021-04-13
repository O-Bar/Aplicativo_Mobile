import { Component } from '@angular/core';

interface remedio{
  name: string;
  dose: string;
  done: boolean;
  id: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public NovoRemedioNome = ''; //guarda o nome inserido no input
  public NovaDoseRemedio = '';
  public completedPercentage = 0; //porcentagem de remedios tomados
  //ele vai ser modificado quando marcar ou desmarcar essa tarefa como concluída, e quando cria uma nova tarefa

  public remedios: remedio[] = []; //lista de remedio
  public filteredRemedios: remedio[] = this.remedios; //lista de remedio filtradas
  public currentFilter: 'todos' | 'tomados' | 'para-tomar' = 'todos';
  
  

  public adicionaRemedio() { //função de adiciona uma tarefa, e o "status" inicia como "não feita", ou sej,a done: false
    const novoRemedio = {
      name: this.NovoRemedioNome, //pega o nome guardado em newTaskName
      dose: this.NovaDoseRemedio,
      done: false,
      id: new Date().getTime() //pega exatamente a timestamp em que a task foi criada - numero de milissegundos que se passaram desde 01/01/1970
    }
    this.remedios.push(novoRemedio); //da um push da lista, acrescentando a nova tarefa
    this.NovoRemedioNome= ''; //a variável newTaskName volta a ser vazia
    this.updateFilter();
  }

  //public removeTask(name: string) { a função de remover vai rerificar o nome da tarefa
  //let taskIndex //é o indice da tarefa
  //for (let i = 0; i < this.tasks.length; i++) { //vai rodar toda a lista de tarefas
  //if (name === this.tasks[i].name) { //vai verificar se o nome da tarefa é o mesmo o nome que o do indice 
  // taskIndex = i;
  // break;
  // }
  //}

  public removeRemedio(id: number) { //a função de remover vai rerificar o id da tarefa
    const RemedioIndex = this.remedios.findIndex(task => task.id === id); //essa função busca uma task cujo o id dela é igual ao id da tarefa que foi selecionada pela checkbox
    this.remedios.splice(RemedioIndex, 1);
    //remove elementos de uma lista, ele recebe de onde ele começa e quantos ele remove 
    this.updateFilter();
  }

  public updateFilter() {
    let filteredBySegment: remedio[]; //filtra por segmento
    if (this.currentFilter === 'todos') {
      filteredBySegment = this.remedios; //todas as tasks
    } else if (this.currentFilter === 'tomados') {
      filteredBySegment = this.remedios.filter(task => task.done); //apenas as tasks que estiverem marcadas como done
    } else if (this.currentFilter === 'para-tomar') {
      filteredBySegment = this.remedios.filter(task => !task.done); //apenas as tasks que não estiverem marcada como done
    }
  }
}


