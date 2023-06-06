import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tree } from 'src/app/models/tree.interface';
import { TREES } from 'src/assets/data/tree.mock';

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.scss'],
})
export class TreesComponent {
  trees: Tree[] = TREES;
  modelForm: FormGroup;
  private fb = inject(FormBuilder);
  constructor() {
    this.modelForm = this.fb.group({
      max_height: ['Hola'],
      perennial: [],
      throns: [],
      use_case: [],
    });
  }
}
