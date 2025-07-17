import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Herramientas } from '../herramientas/herramientas';
import { Medicion } from '../medicion/medicion';
import { Proteccion } from '../proteccion/proteccion';
import { Suministros } from '../suministros/suministros';
import { Usuario } from '../usuario/usuario';
import { Contacto } from '../contacto/contacto';

@Component({
  selector: 'app-menu-de-ventas',
  standalone: true,
  imports: [CommonModule, Herramientas, Medicion, Proteccion, Suministros, Usuario, Contacto],
  templateUrl: './menu-de-ventas.html',
  styleUrl: './menu-de-ventas.css',
})

export class MenuDeVentas {
  //Variables de control para cada menú (solo una debe estar en true a la vez) 
  public mostrarHerramientas = false;
  public mostrarMedicciones = false;
  public mostrarProtecciones = false;
  public mostrarSuministros = false;
  public mostrarUsuarios = false;
  public mostrarContactos = false;

   /**
      * Muestra el menú indicado por el parámetro 'menu'.
      * Si el menú ya estaba abierto, lo cierra.
      * Además, cierra todos los demás menús para asegurar que solo uno esté visible.
   */
  public mostrarMenu(menu: string): void {
    // Si el menú actual es 'herramientas', alterna su valor (mostrar u ocultar), y oculta los demás
    this.mostrarHerramientas =
      menu === 'herramientas' ? !this.mostrarHerramientas : false;
    // Aplica la misma lógica para cada uno de los demás menús
      this.mostrarMedicciones =
      menu === 'mediciones' ? !this.mostrarMedicciones : false;
    this.mostrarProtecciones =
      menu === 'protecciones' ? !this.mostrarProtecciones : false;
    this.mostrarSuministros =
      menu === 'suministros' ? !this.mostrarSuministros : false;
    this.mostrarUsuarios = menu === 'usuarios' ? !this.mostrarUsuarios : false;
    this.mostrarContactos =
      menu === 'contactos' ? !this.mostrarContactos : false;
      // Resultado: solo el menú seleccionado se activa, y todos los demás se desactivan
  }
}
