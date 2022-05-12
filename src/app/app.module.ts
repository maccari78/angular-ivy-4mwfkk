import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HolaComponent } from './hola/hola.component'; // IMPORT DE LOS MODULOS
import { ServidorDatosService } from './servidor-datos.service'; // IMPORT DE LOS
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HolaComponent, // AGREGAR COMPONENTES AL MODULO
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
