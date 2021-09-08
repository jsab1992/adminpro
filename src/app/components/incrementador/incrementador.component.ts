import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }
  //  @Input() progreso: number = 10; asi se renombra un argumento
  @Input() progreso: number = 40;
  @Input() btnClass: string = 'btn btn-primary';
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();
  // get getPorcentaje(): any {
  //   return `${this.getPorcentaje}%`;
  // }
  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return (this.progreso = 100);
    }

    if (this.progreso <= 0 && valor <= 0) {
      this.valorSalida.emit(0);
      return (this.progreso = 0);
    }
    this.valorSalida.emit(this.progreso);
    return (this.progreso = this.progreso + valor);
  }

  onCambio(nuevoValor: any) {
    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
  }
}
