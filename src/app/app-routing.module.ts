import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules').then((m) => m.HomeModule),
  },
  { path: 'home', redirectTo: '' },
  {
    path: 'garden',
    loadChildren: () => import('./modules').then((m) => m.GardenModule),
  },
  {
    path: 'sidewalk',
    loadChildren: () => import('./modules').then((m) => m.SidewalkModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
