import { Component } from '@angular/core';
import { Botas } from '../botas/botas';
import { Ropa } from '../ropa/ropa';
import { Guantes } from '../guantes/guantes';
import { Gafas } from '../gafas/gafas';
import { Mascaras } from '../mascaras/mascaras';
import { Cascos } from '../cascos/cascos';

@Component({
  selector: 'app-proteccion',
  standalone: true,
  imports: [Botas,Ropa,Guantes,Gafas,Mascaras,Cascos,],
  templateUrl: './proteccion.html',
  styleUrls: ['./proteccion.css'],
})

export class Proteccion {
  //Variables de control para cada menú (solo una debe estar en true a la vez) 
  public mostrarBotas = false;
  public mostrarRopa = false;
  public mostrarGuantes = false;
  public mostrarGafas = false;
  public mostrarMascaras = false;
  public mostrarCascos = false;

/**
    * Muestra el menú indicado por el parámetro 'menu'.
    * Si el menú ya estaba abierto, lo cierra.
    * Además, cierra todos los demás menús para asegurar que solo uno esté visible.
 */
  public mostrarMenu(menu: string): void {
    // Si el menú actual es 'proteccion', alterna su valor (mostrar u ocultar), y oculta los demás
    this.mostrarBotas = menu === 'botas' ? !this.mostrarBotas : false;
    // Aplica la misma lógica para cada uno de los demás menús
    this.mostrarRopa = menu === 'ropa' ? !this.mostrarRopa : false;
    this.mostrarGuantes = menu === 'guantes' ? !this.mostrarGuantes : false;
    this.mostrarGafas = menu === 'gafas' ? !this.mostrarGafas : false;
    this.mostrarMascaras = menu === 'mascaras' ? !this.mostrarMascaras : false;
    this.mostrarCascos = menu === 'cascos' ? !this.mostrarCascos : false;
    // Resultado: solo el menú seleccionado se activa, y todos los demás se desactivan
  }
}
