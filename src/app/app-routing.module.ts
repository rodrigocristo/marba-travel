import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompraComponent } from './compra/compra.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
		path: 'compra',
    component: CompraComponent
  },
  {
		path: '',
    component: HomeComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
