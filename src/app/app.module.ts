import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FootComponent } from './foot/foot.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) ],
  declarations: [ AppComponent, HeaderComponent, BodyComponent, FootComponent ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
