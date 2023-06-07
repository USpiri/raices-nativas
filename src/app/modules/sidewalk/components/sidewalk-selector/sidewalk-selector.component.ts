import { Component, EventEmitter, Output, inject } from '@angular/core';
import { TreeSidewalk } from 'src/app/models/tree.interface';
import { SelectorService } from '../../shared/selector.service';

@Component({
  selector: 'app-sidewalk-selector',
  templateUrl: './sidewalk-selector.component.html',
  styleUrls: ['./sidewalk-selector.component.scss'],
})
export class SidewalkSelectorComponent {
  @Output() selectedOption: EventEmitter<unknown> = new EventEmitter();

  private selector = inject(SelectorService);
  selectOption(value: TreeSidewalk) {
    this.selectedOption.emit();
    this.selector.setSidewalkSize(value);
  }
}
