import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component'; // Ajuste o caminho conforme necessário
import { HttpClientModule } from '@angular/common/http';
import { ListaPaisesComponent } from './paises/lista-paises/lista-paises.component';
import { ApiUsadaComponent } from './api-usada/api-usada.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // Adicione o HeaderComponent aqui
    ListaPaisesComponent,
    ApiUsadaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
