import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudeAdminComponent } from './modules/sistrar/actividades/Festivos/pages/solicitudes/container/solicitude-admin/solicitude-admin.component';

const routes: Routes = [
  { path: '', component: SolicitudeAdminComponent },  // Esta es la ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
