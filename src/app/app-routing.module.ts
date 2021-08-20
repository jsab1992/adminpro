import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  // path: '/dashboard' PagesRouting
  // path: '/auth' AuthRouting
  // path: '/medicos' MedicosRouting
  // path: '/compras' ComprasRouting

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
  { path: '**', component: NopagefoundComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
