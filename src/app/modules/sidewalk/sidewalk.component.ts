import { Component } from '@angular/core';
import { TreeSidewalk } from 'src/app/models/tree.interface';

@Component({
  selector: 'app-sidewalk',
  templateUrl: './sidewalk.component.html',
  styleUrls: ['./sidewalk.component.scss'],
})
export class SidewalkComponent {
  isSelectorActive = true;
  sidewalkSize: TreeSidewalk = null;
  onSelectOption(value: TreeSidewalk) {
    this.sidewalkSize = value;
    this.isSelectorActive = false;
  }
}
