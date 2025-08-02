import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudeAdminComponent } from './modules/sistrar/actividades/Festivos/pages/solicitudes/container/solicitude-admin/solicitude-admin.component';
import { SolicitudeDescargasComponent } from './modules/sistrar/actividades/Festivos/pages/solicitudes/container/solicitude-descargas/solicitude-descargas.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudeAdminComponent,
    SolicitudeDescargasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
