import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { MedicionYNivelacionComponent } from './componentes/medicion-y-nivelacion/medicion-y-nivelacion.component';
//import { ProteccionComponent } from './componentes/proteccion/proteccion.component';
//import { SuministrosComponent } from './componentes/suministros/suministros.component';
//import { UsuarioComponent } from './componentes/usuario/usuario.component';
//import { ContactoComponent } from './componentes/contacto/contacto.component'; 

export const routes: Routes = [
 //path: '', component: InicioComponent },
// path: 'herramientas', component: HerramientasComponent },
  //{ path: 'medicion-y-nivelacion', component: MedicionYNivelacionComponent },
 
  //{ path: 'proteccion', component: ProteccionComponent },
  //{ path: 'suministros', component: SuministrosComponent },
  //{ path: 'usuario', component: UsuarioComponent },
  //{ path: 'contacto', component: ContactoComponent },
  //{ path: '', redirectTo: '/herramientas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
