import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerramientasManuales } from '../herramientas-manuales/herramientas-manuales.component';
import { HerramientasElectricas } from '../herramientas-electricas/herramientas-electricas.component';
import { HerramientasIndustriales } from '../herramientas-industriales/herramientas-industriales.component';

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [
    CommonModule,
    HerramientasManuales,
    HerramientasElectricas,
    HerramientasIndustriales,
  ],
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css'],
})
export class Herramientas {
  //Variables de control para cada menú (solo una debe estar en true a la vez)
  public mostrarHerramientasManuales = false;
  public mostrarHerramientasElectricas = false;
  public mostrarHerramientasIndustriales = false;
  /**
   * Muestra el menú indicado por el parámetro 'menu'.
   * Si el menú ya estaba abierto, lo cierra.
   * Además, cierra todos los demás menús para asegurar que solo uno esté visible.
   */
  public mostrarMenu(menu: string): void {
    // Si el menú actual es 'herramientas', alterna su valor (mostrar u ocultar), y oculta los demás
    this.mostrarHerramientasManuales =
      menu === 'manuales' ? !this.mostrarHerramientasManuales : false;
    // Aplica la misma lógica para cada uno de los demás menús
    this.mostrarHerramientasElectricas =
      menu === 'electricas' ? !this.mostrarHerramientasElectricas : false;
    this.mostrarHerramientasIndustriales =
      menu === 'industriales' ? !this.mostrarHerramientasIndustriales : false;
    // Resultado: solo el menú seleccionado se activa, y todos los demás se desactivan
  }
}
