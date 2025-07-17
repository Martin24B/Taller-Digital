import { Component } from '@angular/core';
import { Pegamentos } from '../pegamentos/pegamentos';
import { Aceites } from '../aceites/aceites';
import { Lijas } from '../lijas/lijas';
import { Clavos } from '../clavos/clavos';
import { Libreria } from '../libreria/libreria';

@Component({
  selector: 'app-suministros',
  standalone: true,
  imports: [Pegamentos,Aceites,Lijas,Clavos,Libreria],
  templateUrl: './suministros.html',
  styleUrls: ['./suministros.css'],
})
export class Suministros {
   //Variables de control para cada menú (solo una debe estar en true a la vez) 
  public mostrarPegamentos = false;
  public mostrarAceites = false;
  public mostrarLijas = false;
  public mostrarClavos = false;
  public mostrarLibreria = false;

/**
    * Muestra el menú indicado por el parámetro 'menu'.
    * Si el menú ya estaba abierto, lo cierra.
    * Además, cierra todos los demás menús para asegurar que solo uno esté visible.
 */
  public mostrarMenu(menu: string): void {
     // Si el menú actual es 'suministro', alterna su valor (mostrar u ocultar), y oculta los demás
    this.mostrarPegamentos = menu === 'pegamentos' ? !this.mostrarPegamentos : false;
    // Aplica la misma lógica para cada uno de los demás menús
    this.mostrarAceites = menu === 'aceites' ? !this.mostrarAceites : false;
    this.mostrarLijas = menu === 'lijas' ? !this.mostrarLijas : false;
    this.mostrarClavos = menu === 'clavos' ? !this.mostrarClavos : false;
    this.mostrarLibreria = menu === 'libreria' ? !this.mostrarLibreria : false;
   // Resultado: solo el menú seleccionado se activa, y todos los demás se desactivan
  }
}
