import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { PortadaComponent } from './components/portada/portada.component';

import { EditorModule, ButtonModule,GalleriaModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    EditorModule,
    GalleriaModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "es-ec"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
