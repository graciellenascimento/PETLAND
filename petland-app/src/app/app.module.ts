import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';

import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { InitialPageComponent } from './views/initial-page/initial-page.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { LoginComponent } from './views/login/login.component';
import { NavComponent } from './template/nav/nav.component';
import { AgendaPetComponent } from './views/agenda-pet/agenda-pet.component';
import { AddPetComponent } from './views/add-pet/add-pet.component';
import { FaleConoscoComponent } from './views/fale-conosco/fale-conosco.component';
import { UrgenciaComponent } from './views/urgencia/urgencia.component';
import { AgendasNavComponent } from './views/agendas-nav/agendas-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EquipeComponent } from './views/equipe/equipe.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    InitialPageComponent,
    CadastroComponent,
    LoginComponent,
    NavComponent,
    AgendaPetComponent,
    AddPetComponent,
    FaleConoscoComponent,
    UrgenciaComponent,
    AgendasNavComponent,
    EquipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
