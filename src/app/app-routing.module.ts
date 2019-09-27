import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesReadComponent } from './places-read/places-read.component';
import { PlacesCreateComponent } from './places-create/places-create.component';
import { PlacesEditComponent } from './places-edit/places-edit.component';
import { PlacesHomeComponent } from './places-home/places-home.component';

const routes: Routes = [
  { path: 'places-home', component: PlacesHomeComponent },
  { path: 'places-read', component: PlacesReadComponent },
  { path: 'places-create', component: PlacesCreateComponent },
  { path: 'places-edit', component: PlacesEditComponent },

  { path: '',   redirectTo: '/places-home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
