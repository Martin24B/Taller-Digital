import { Component } from '@angular/core';
import { Niveles } from '../niveles/niveles';
import { CintasMetricas } from '../cintas-metricas/cintas-metricas';
import { MedidoresDistancia } from '../medidores-distancia/medidores-distancia';
import { Calibradores } from '../calibradores/calibradores';
import { Transportadores } from '../transportadores/transportadores';
import { Reglas } from '../reglas/reglas';

@Component({
  selector: 'app-medicion',
  standalone: true,
  imports: [Niveles,CintasMetricas,MedidoresDistancia,Calibradores,Transportadores,Reglas,],
  templateUrl: './medicion.html',
  styleUrls: ['./medicion.css'],
})
export class Medicion {
   //Variables de control para cada menú (solo una debe estar en true a la vez) 
  public mostrarNiveles = false;
  public mostrarCintas = false;
  public mostrarDistancia = false;
  public mostrarCalibradores = false;
  public mostrarTransportadores = false;
  public mostrarReglas = false;

  /**
    * Muestra el menú indicado por el parámetro 'menu'.
    * Si el menú ya estaba abierto, lo cierra.
    * Además, cierra todos los demás menús para asegurar que solo uno esté visible.
 */
  public mostrarMenu(menu: string): void {
    // Si el menú actual es 'medicion', alterna su valor (mostrar u ocultar), y oculta los demás
    this.mostrarNiveles = menu === 'niveles' ? !this.mostrarNiveles : false;
    // Aplica la misma lógica para cada uno de los demás menús
    this.mostrarCintas = menu === 'cintas' ? !this.mostrarCintas : false;
    this.mostrarDistancia = menu === 'distancia' ? !this.mostrarDistancia : false;
    this.mostrarCalibradores = menu === 'calibradores' ? !this.mostrarCalibradores : false;
    this.mostrarTransportadores = menu === 'transportadores' ? !this.mostrarTransportadores : false;
    this.mostrarReglas = menu === 'reglas' ? !this.mostrarReglas : false;
    // Resultado: solo el menú seleccionado se activa, y todos los demás se desactivan
  }
}
