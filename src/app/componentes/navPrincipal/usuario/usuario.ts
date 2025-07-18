import { Component } from '@angular/core';
import { Ingreso } from '../ingreso/ingreso';
import { Registro } from '../registro/registro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, Ingreso, Registro],
  templateUrl: './usuario.html',
  styleUrls: ['./usuario.css'],
})
export class Usuario {
  //Variables de control para cada menú (solo una debe estar en true a la vez)
  public mostrarIngreso = false;
  public mostrarRegistro = false;

  /**
   * Muestra el menú indicado por el parámetro 'menu'.
   * Si el menú ya estaba abierto, lo cierra.
   * Además, cierra todos los demás menús para asegurar que solo uno esté visible.
   */
  public mostrarMenu(menu: string): void {
    //Si el menú actual es 'usuario', alterna su valor (mostrar u ocultar), y oculta los demás
    this.mostrarIngreso = menu === 'ingreso' ? !this.mostrarIngreso : false;
    //Aplica la misma lógica para cada uno de los demás menús
    this.mostrarRegistro = menu === 'registro' ? !this.mostrarRegistro : false;
    //Resultado: solo el menú seleccionado se activa, y todos los demás se desactivan
  }
}
