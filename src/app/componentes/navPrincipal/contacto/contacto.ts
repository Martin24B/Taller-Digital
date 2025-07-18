import { Component } from '@angular/core';
import { Presentacion } from '../presentacion/presentacion';
import { Redes } from '../redes/redes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, Presentacion, Redes],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css'],
})

export class Contacto {
  //Variables de control para cada menú (solo una debe estar en true a la vez)
  public mostrarPresentacion = false;
  public mostrarRedes = false;

  /**
   * Muestra el menú indicado por el parámetro 'menu'.
   * Si el menú ya estaba abierto, lo cierra.
   * Además, cierra todos los demás menús para asegurar que solo uno esté visible.
   */
  public mostrarMenu(menu: string): void {
     //Si el menú actual es 'contacto', alterna su valor (mostrar u ocultar), y oculta los demás
    this.mostrarPresentacion = menu === 'quienes' ? !this.mostrarPresentacion : false;
    //Aplica la misma lógica para cada uno de los demás menús
    this.mostrarRedes = menu === 'redes' ? !this.mostrarRedes : false;
    //Resultado: solo el menú seleccionado se activa, y todos los demás se desactivan
  }
}
