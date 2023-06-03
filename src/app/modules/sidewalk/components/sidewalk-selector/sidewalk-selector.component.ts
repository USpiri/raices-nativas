import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidewalk-selector',
  templateUrl: './sidewalk-selector.component.html',
  styleUrls: ['./sidewalk-selector.component.scss'],
})
export class SidewalkSelectorComponent {
  @Output() selectedOption: EventEmitter<unknown> = new EventEmitter();
  selectOption() {
    this.selectedOption.emit();
  }
}
