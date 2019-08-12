import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UtilisateurCreateComponent } from './components/utilisateur-create/utilisateur-create.component';
import { UtilisateurListComponent } from './components/utilisateur-list/utilisateur-list.component';
import { UtilisateurEditComponent } from './components/utilisateur-edit/utilisateur-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurCreateComponent,
    UtilisateurListComponent,
    UtilisateurEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }