import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerandaComponent } from './beranda/beranda.component';

const routes: Routes = [
  {
    path: '',
    component: BerandaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
