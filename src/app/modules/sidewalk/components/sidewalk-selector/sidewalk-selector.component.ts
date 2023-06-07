import { Component, EventEmitter, Output } from '@angular/core';
import { TreeSidewalk } from 'src/app/models/tree.interface';

@Component({
  selector: 'app-sidewalk-selector',
  templateUrl: './sidewalk-selector.component.html',
  styleUrls: ['./sidewalk-selector.component.scss'],
})
export class SidewalkSelectorComponent {
  @Output() selectedOption: EventEmitter<TreeSidewalk> = new EventEmitter();
  selectOption(value: TreeSidewalk) {
    this.selectedOption.emit(value);
  }
}
