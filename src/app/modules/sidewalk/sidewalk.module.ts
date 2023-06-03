import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidewalkComponent } from './sidewalk.component';
import { SidewalkRoutingModule } from './sidewalk-routing.module';

@NgModule({
  declarations: [SidewalkComponent],
  imports: [CommonModule, SidewalkRoutingModule],
})
export class SidewalkModule {}
