import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudFormComponent } from './components/solicitud-form/solicitud-form.component';

const routes: Routes = [
  {
    path: 'solicitud',
    component: SolicitudFormComponent
  },
  {
    path: '',
    redirectTo: '/solicitud',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
