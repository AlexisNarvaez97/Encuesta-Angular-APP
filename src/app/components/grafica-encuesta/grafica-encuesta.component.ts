import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica-encuesta',
  templateUrl: './grafica-encuesta.component.html',
  styleUrls: ['./grafica-encuesta.component.css']
})
export class GraficaEncuestaComponent implements OnInit {

  public barChartLabels: Array<any> = ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4'];
  public barChartType: any = 'bar';

  public barChartData: Array<any> = [
    { data: [65, 59, 80, 81], label: 'Preguntas' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
