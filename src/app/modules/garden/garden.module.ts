import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GardenComponent } from './garden.component';
import { GardenRoutingModule } from './garden-routing.module';

@NgModule({
  declarations: [GardenComponent],
  imports: [CommonModule, GardenRoutingModule],
})
export class GardenModule {}
