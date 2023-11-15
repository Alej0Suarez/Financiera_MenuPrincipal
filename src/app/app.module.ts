import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { SolicitudFormComponent } from './components/solicitud-form/solicitud-form.component';
import { InformacionFormComponent } from './components/informacion-form/informacion-form.component';
import { FondoPreviewComponent } from './components/fondo-preview/fondo-preview.component';
import { FormGroup } from '@angular/forms';
import { SolicitudComponent } from './solicitud/solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    SolicitudFormComponent,
    InformacionFormComponent,
    FondoPreviewComponent,
    SolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
