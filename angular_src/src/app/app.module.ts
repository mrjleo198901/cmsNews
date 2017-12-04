import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { PortadaComponent } from './components/portada/portada.component';

import { EditorModule, ButtonModule,GalleriaModule } from 'primeng/primeng';
import { UploadComponent } from './components/upload/upload.component';

/*Navigation*/
const appRoutes: Routes = [
  { path: 'upload', component: UploadComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    EditorModule,
    GalleriaModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [{provide: LOCALE_ID, useValue: "es-ec"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
