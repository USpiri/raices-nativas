import { Component } from '@angular/core';

@Component({
  selector: 'app-sidewalk',
  templateUrl: './sidewalk.component.html',
  styleUrls: ['./sidewalk.component.scss'],
})
export class SidewalkComponent {
  isSelectorActive = true;
  onSelectOption() {
    this.isSelectorActive = false;
  }
}
