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
  filteredTrees: Tree[] = [];
  modelForm: FormGroup;

  private fb = inject(FormBuilder);

  constructor() {
    this.modelForm = this.fb.group({
      max_height: [null],
      perennial: [null],
      thorns: [null],
      use_case: [null],
    });
    this.filteredTrees = [...this.trees];
  }

  filter() {
    const filterValue = this.modelForm.value;
    let filteredTrees = [...this.trees];

    Object.entries(filterValue).forEach(([clave, valor]) => {
      if (valor !== null) {
        if (typeof valor === 'string') {
          filteredTrees = filteredTrees.filter((tree) => {
            const treeValue = String(tree[clave as keyof Tree]).toLowerCase();
            const filterValue = valor.toLowerCase();
            return treeValue.includes(filterValue);
          });
        } else {
          filteredTrees = filteredTrees.filter(
            (tree) => tree[clave as keyof Tree] === valor
          );
        }
      }
    });

    this.filteredTrees = filteredTrees;
    console.log('filter', filterValue);
    console.log('result', this.filteredTrees);
  }
}
