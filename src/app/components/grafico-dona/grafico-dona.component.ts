import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('leyenda') leyenda: string;
  @Input('etiquetas') doughnutChartLabels: string[];
  @Input('data')  doughnutChartData: number[];
  @Input('tipo')  doughnutChartType: string;

  constructor() { }

  ngOnInit() {
  }

}
