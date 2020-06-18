import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductConfiguratorComponent } from './product-configurator/product-configurator.component';
import { FormsModule } from '@angular/forms';
import { CanvasSamplesComponent } from './canvas-samples/canvas-samples.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductConfiguratorComponent,
    CanvasSamplesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
