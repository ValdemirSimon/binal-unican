import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarreraComponent } from './pages/carrera/carrera.component';
import { CarrerasComponent } from './pages/carreras/carreras.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CriterioComponent } from './pages/criterio/criterio.component';
import { CriteriosComponent } from './pages/criterios/criterios.component';
import { DisertanteComponent } from './pages/disertante/disertante.component';
import { DisertantesComponent } from './pages/disertantes/disertantes.component';
import { EvaluadorComponent } from './pages/evaluador/evaluador.component';
import { EvaluadoresComponent } from './pages/evaluadores/evaluadores.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { CalificacionesComponent } from './pages/calificaciones/calificaciones.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ModalCalificarComponent } from './components/modal-calificar/modal-calificar.component';
import { CalificarComponent } from './pages/calificar/calificar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    CarreraComponent,
    CarrerasComponent,
    CategoriaComponent,
    CategoriasComponent,
    CriterioComponent,
    CriteriosComponent,
    DisertanteComponent,
    DisertantesComponent,
    EvaluadorComponent,
    EvaluadoresComponent,
    ProyectoComponent,
    ProyectosComponent,
    CalificacionesComponent,
    InicioComponent,
    ModalCalificarComponent,
    CalificarComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }