import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidewalkComponent } from './sidewalk.component';

const routes: Routes = [
  { path: '', component: SidewalkComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidewalkRoutingModule {}
