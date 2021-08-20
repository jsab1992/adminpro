import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  
  @Input() public titles: string = 'doughnut';
  @Input() public labelOption: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  @Input() public data: MultiDataSet = [[350, 450, 100]];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    { backgroundColor: ['#6857E6', '#FF5800', '#FFB$14'] },
  ];

  cambioValorHijo(labelSalida: string) {
    this.titles = labelSalida;
    console.log('holaaaaaa hijo' +    labelSalida);   
  }


  // @Output() labelSalida: EventEmitter<string[]> = new EventEmitter();

  // onsendData() {
  //   this.labelSalida.emit(this.labelOption);
  //   console.log('this.labelOption' + this.labelOption);
  // }

  // public doughnutChartLabels: Label[] = [
  //   'Download Sales',
  //   'In-Store Sales',
  //   'Mail-Order Sales',
  // ];
  // public doughnutChartData: MultiDataSet = [[350, 450, 100]];
  // public doughnutChartType: ChartType = 'doughnut';
  // public colors: Color[] = [
  //   { backgroundColor: ['#6857E6', '#FF5800', '#FFB$14'] },
  // ];
}
