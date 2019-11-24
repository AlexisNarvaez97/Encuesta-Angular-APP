import { Component, OnInit } from '@angular/core';
import { setInterval } from 'timers';

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


    setInterval( () => {

      const newData = [
        Math.round( Math.random() * 100),
        Math.round( Math.random() * 100),
        Math.round( Math.random() * 100),
        Math.round( Math.random() * 100),
      ];

      this.barChartData = [
        { data: newData, label: 'Preguntas'}
      ];

    }, 5000);


  }

}
