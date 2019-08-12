import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilisateurCreateComponent } from './components/utilisateur-create/utilisateur-create.component';
import { UtilisateurListComponent } from './components/utilisateur-list/utilisateur-list.component';
import { UtilisateurEditComponent } from './components/utilisateur-edit/utilisateur-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'imc-calcule' },
  { path: 'imc-calcule', component: UtilisateurCreateComponent },
  { path: 'edit-utilisateur/:id', component: UtilisateurEditComponent },
  { path: 'utilisateurs-list', component: UtilisateurListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }