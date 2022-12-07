import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StudiesComponent } from './components/studies/studies.component';
import { WorksComponent } from './components/works/works.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    children: [
      {
        path: 'perfil',
        component: ProfileComponent
      },
      {
        path: 'estudios',
        component: StudiesComponent,
      },
      {
        path: 'trabajos',
        component: WorksComponent,
      },
      {
        path: 'contacto',
        component: ContactComponent,
      },
      {
        path: '**',
        redirectTo: 'perfil',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
