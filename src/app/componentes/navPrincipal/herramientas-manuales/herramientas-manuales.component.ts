import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MockProductosService } from '../../secProductos/ServiceProductos';
import { Producto } from '../../secProductos/Productos';
import { ProductosComponent } from '../../secProductos/SecProductos.component';

@Component({
  selector: 'app-herramientas-manuales',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductosComponent],
  templateUrl: './herramientas-manuales.component.html',
  styleUrls: ['./herramientas-manuales.component.css'],
})

export class HerramientasManuales implements OnInit {
  public productos: Producto[] = [];
  private mockService = inject(MockProductosService);

  /**
   * Carga los productos de la categoría 'manuales' desde el servicio mock.
   * Asigna el resultado a la propiedad 'productos' para ser cargada en la plantilla.
   */
  public cargarProductos(): void {
    const self = this;
    this.mockService.obtenerProductos('manuales').subscribe(function (lista) {
      self.productos = lista;
    });
  }

  public ngOnInit(): void {
    this.cargarProductos();
  }
}
