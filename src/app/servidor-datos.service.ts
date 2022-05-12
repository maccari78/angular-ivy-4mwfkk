import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServidorDatosService {
  constructor() {}

  public getCotizacion(): any {
    console.log('recuperando datos');
    return { moneda: 'dolar', cotizacion: 110.5 };
  }
}
