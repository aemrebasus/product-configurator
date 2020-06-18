import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductConfiguratorComponent } from './product-configurator/product-configurator.component';


const routes: Routes = [
  { path: '', component: ProductConfiguratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
