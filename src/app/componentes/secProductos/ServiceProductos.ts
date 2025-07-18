import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HERRAMIENTAS_MANUALES, HERRAMIENTAS_ELECTRICAS, HERRAMIENTAS_INDUSTRIALES } from './MockProductos.service';
import { Producto } from './Productos';

@Injectable({
  providedIn: 'root'
})

export class MockProductosService {
  obtenerProductos(categoria: string): Observable<Producto[]> {
    switch(categoria) {
      case 'manuales': return of(HERRAMIENTAS_MANUALES);
      case 'electricas': return of(HERRAMIENTAS_ELECTRICAS);
      case 'industriales': return of(HERRAMIENTAS_INDUSTRIALES);
      default: return of([]);
    }
  }
}
