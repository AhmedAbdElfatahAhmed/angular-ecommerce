import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path: 'products', loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)},
  {path:'feature',loadChildren:()=>import('./feature/feature.module').then(m=>m.FeatureModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
