import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraBusqComponent } from './barra-busq/barra-busq.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraBusqComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
