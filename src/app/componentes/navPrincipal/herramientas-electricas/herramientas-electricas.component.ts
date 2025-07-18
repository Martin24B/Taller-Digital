import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MockProductosService } from '../../secProductos/ServiceProductos';
import { Producto } from '../../secProductos/Productos';
import { ProductosComponent } from '../../secProductos/SecProductos.component';

@Component({
  selector: 'app-herramientas-electricas',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductosComponent],
  templateUrl: './herramientas-electricas.component.html',
  styleUrls: ['./herramientas-electricas.component.css'],
})

export class HerramientasElectricas implements OnInit {
  public productos: Producto[] = [];
  private mockService = inject(MockProductosService);

  /**
   * Carga los productos de la categoría 'electricas' desde el servicio mock.
   * Asigna el resultado a la propiedad 'productos' para ser crgada en la plantilla.
   */
  public cargarProductos(): void {
    const self = this;
    this.mockService.obtenerProductos('electricas').subscribe(function(lista) {
      self.productos = lista;
    });
  }

  public ngOnInit(): void {
    this.cargarProductos();
  }
}
