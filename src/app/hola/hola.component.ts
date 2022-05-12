import { Component, OnInit } from '@angular/core';
import { ServidorDatosService } from '../servidor-datos.service';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.css'],
})

// CONTROLADOR - CONTROLLER
export class HolaComponent implements OnInit {
  // MODEL
  nombre: string;
  premio: number;
  despedida: boolean = false;

  cotizacion: any = null;

  constructor(private servicio: ServidorDatosService) {
    this.nombre = 'Marcelo';
    this.premio = 0;
    this.cotizacion = null;
  }

  public doDespedir(): void {
    this.despedida = true;
    this.nombre = '';
    this.premio += 1000.5;
  }

  public doRegresar(): void {
    this.despedida = false;
    this.nombre = 'Marcelo';
  }

  public doVerCotizacionDolar(): void {
    this.cotizacion = this.servicio.getCotizacion();
  }

  ngOnInit() {}
}
