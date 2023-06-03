import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardenComponent } from './garden.component';

const routes: Routes = [
  { path: '', component: GardenComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GardenRoutingModule {}
