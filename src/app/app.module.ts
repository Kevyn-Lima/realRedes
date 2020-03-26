import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ServicosComponent } from './servicos/servicos.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ContatosComponent } from './contatos/contatos.component';
import { FooterComponent } from './footer/footer.component';
import { ScrolltopComponent } from './scrolltop/scrolltop.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ServicosComponent,
    EmpresaComponent,
    ContatosComponent,
    FooterComponent,
    ScrolltopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
