import { WelcomeComponent } from './components/welcome/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ToastrModule} from 'ngx-toastr';
import { AppComponent } from './app.component';
import { ListarCervejasComponent } from './components/listar-cervejas/listar-cervejas.component';
import { DetalheCervejaComponent } from './components/detalhe-cerveja/detalhe-cerveja.component';
import { EspacoMoedaPipe } from './pipes/espaco-moeda.pipe';
import { UnidadeCervejaPipe } from './pipes/unidade-cerveja.pipe';
import { PontoVirgulaPipe } from './pipes/ponto-virgula.pipe';
import {FormsModule} from '@angular/forms';
import { FiltroCervejaPipe } from './pipes/filtro-cerveja.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroCervejaComponent } from './components/cadastro-cerveja/cadastro-cerveja.component';
import { FormDebuggerComponent } from './components/form-debugger/form-debugger.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarCervejasComponent,
    DetalheCervejaComponent,
    EspacoMoedaPipe,
    UnidadeCervejaPipe,
    PontoVirgulaPipe,
    FiltroCervejaPipe,
    WelcomeComponent,
    NavbarComponent,
    CadastroCervejaComponent,
    FormDebuggerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'cervejas', component: ListarCervejasComponent},
      {path: 'cadastroCervejas', component: CadastroCervejaComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},

    ]),
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
