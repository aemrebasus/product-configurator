import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductConfiguratorComponent } from './product-configurator/product-configurator.component';
import { CanvasSamplesComponent } from './canvas-samples/canvas-samples.component';


const routes: Routes = [
  {
    path: '', component: ProductConfiguratorComponent
  },
  { path: 'canvas', component: CanvasSamplesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
