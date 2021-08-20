import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  // public titles: string = 'Sales'
  public labels1: string[] = ['Descarga ventas', 'Tienda ', 'Ordenes'];
  public datosDona = [[11, 50, 200]];
  
  



  // @Input() labels1: string[] = [
  //   'Download Sales',
  //   'In-Store Sales',
  //   'Mail-Order Sales',
  // ];

  // labelData(labels: string[]) {
  //   // this.labels1 = label;
  //   console.log('dona' + labels);
  // }
}
