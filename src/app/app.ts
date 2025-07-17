import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuDeVentas } from './componentes/navPrincipal/menu-de-ventas/menu-de-ventas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuDeVentas],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected readonly title = signal('Taller-Digital');
}
