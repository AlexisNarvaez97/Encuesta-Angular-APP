import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: "app-grafica-encuesta",
  templateUrl: "./grafica-encuesta.component.html",
  styleUrls: ["./grafica-encuesta.component.css"]
})
export class GraficaEncuestaComponent implements OnInit {

  preguntas = ['1', '2', '3', '4'];

  public barChartLabels: Array<any> = [
    "Pregunta 1",
    "Pregunta 2",
    "Pregunta 3",
    "Pregunta 4"
  ];
  public barChartType: any = "bar";

  public barChartData: Array<any> = [
    { data: [0, 0, 0, 0], label: "Preguntas" }
  ];

  constructor(private http: HttpClient, private wsService: WebsocketService) {}

  ngOnInit() {
    this.getData();
    this.escucharSocket();
  }

  getData() {
    this.http.get("http://localhost:5000/encuesta").subscribe((resp: any) => {
      console.log(resp);

      this.barChartData = resp;
    });
  }

  escucharSocket() {
    this.wsService.listen('cambios-encuesta').subscribe( (resp: any) => {
      this.barChartData = resp;
      console.log('socket', resp);
    });

  }

  enviarValores(form) {

    console.log(form);

    // tslint:disable-next-line: whitespace
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    const questionNumber = (<HTMLInputElement> document.getElementById('pregunta')).value;

    const pregunta = questionNumber;
    const valor = form.valor;

    const voto = {
      pregunta,
      valor
    };

    this.http.post("http://localhost:5000/encuesta", voto).subscribe( resp => {
      console.log(resp);
    });

  }


}
