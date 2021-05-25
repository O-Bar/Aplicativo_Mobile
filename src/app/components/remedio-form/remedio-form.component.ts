import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-remedio-form',
  templateUrl: './remedio-form.component.html',
  styleUrls: ['./remedio-form.component.scss'],
})
export class RemedioFormComponent implements OnInit {

  @Input() remedio;
  @Output() remedioSaved = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  public onClick(){
    this.remedioSaved.emit();
  }
}
