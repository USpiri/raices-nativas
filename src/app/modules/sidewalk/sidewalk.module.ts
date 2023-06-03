import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidewalkComponent } from './sidewalk.component';
import { SidewalkRoutingModule } from './sidewalk-routing.module';
import { MaterialModule } from './shared/material.module';
import { SidewalkSelectorComponent } from './components/sidewalk-selector/sidewalk-selector.component';
import { TreesComponent } from './components/trees/trees.component';
import { TreeComponent } from './components/trees/components/tree/tree.component';

@NgModule({
  declarations: [
    SidewalkComponent,
    SidewalkSelectorComponent,
    TreesComponent,
    TreeComponent,
  ],
  imports: [CommonModule, SidewalkRoutingModule, MaterialModule],
})
export class SidewalkModule {}
