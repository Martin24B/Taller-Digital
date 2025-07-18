import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MockProductosService } from '../../secProductos/ServiceProductos';
import { Producto } from '../../secProductos/Productos';
import { ProductosComponent } from '../../secProductos/SecProductos.component';

@Component({
  selector: 'app-herramientas-industriales',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductosComponent],
  templateUrl: './herramientas-industriales.component.html',
  styleUrls:  ['./herramientas-industriales.component.css'],
})

export class HerramientasIndustriales implements OnInit {
  public productos: Producto[] = [];
  private mockService = inject(MockProductosService);

  /**
   * Carga los productos de la categoría 'electricas' desde el servicio mock.
   * Asigna el resultado a la propiedad 'productos' para ser crgada en la plantilla.
   */
  // Método para cargar productos categoría 'industriales'
  public cargarProductos(): void {
    const self = this;
    this.mockService.obtenerProductos('industriales').subscribe(function(lista) {
      self.productos = lista;
    });
  }

  public ngOnInit(): void {
    this.cargarProductos();
  }
}
