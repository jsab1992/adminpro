import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent {
  progreso1: number = 15;
  progreso2: number = 35;

  get getProcentaje1() {
    return `${this.progreso1}%`;
  }

  get getProcentaje2() {
    return `${this.progreso2}%`;
  }
  cambioValorHijo(valor: number) {
    this.progreso1 = valor;
    this.progreso2 = valor;
    // console.log('holaaaaaa hijo' + valor);
  }
}
