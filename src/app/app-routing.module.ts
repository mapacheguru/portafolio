import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
/*como funcionan las rutas:*/
const app_routes: Routes = [
  /*para el index:*/
  {path: 'home', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item', component: ItemComponent},
  /*cualquier otra ruta que no sea las anteriores redireccionara a portafolio component*/
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, {useHash: true})],
  /*cuando no puedes modificarel htacces agregar , {useHash: true}) */
  /*EL FORcHILD ES PARA RUTAS HIJAS */
  exports: [RouterModule]
})
export class AppRoutingModule { }
