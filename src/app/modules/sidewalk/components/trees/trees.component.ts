import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tree, TreeSidewalk } from 'src/app/models/tree.interface';
import { TREES } from 'src/assets/data/tree.mock';
import { SelectorService } from '../../shared/selector.service';

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.scss'],
})
export class TreesComponent implements OnInit {
  trees: Tree[] = TREES;
  filteredTrees: Tree[] = [];
  modelForm: FormGroup;
  sidewalkFilter: TreeSidewalk = 'large';

  private fb = inject(FormBuilder);
  private selector = inject(SelectorService);

  constructor() {
    this.modelForm = this.fb.group({
      max_height: [null],
      perennial: [null],
      thorns: [null],
      use_case: [null],
      sidewalk_size: [this.sidewalkFilter],
    });
    this.selector.selectedValue.subscribe(
      (value) => (this.sidewalkFilter = value)
    );
  }

  ngOnInit(): void {
    this.modelForm.get('sidewalk_size')?.setValue(this.sidewalkFilter);
    this.filter();
  }

  filter() {
    const filterValue = this.modelForm.value;
    let filteredTrees = [...this.trees];

    Object.entries(filterValue).forEach(([clave, valor]) => {
      if (valor !== '' && valor !== null) {
        if (clave === 'max_height') {
          filteredTrees = filteredTrees.filter((tree) => {
            const treeMaxHeight = tree.max_height;
            if (valor === '4') {
              return treeMaxHeight <= 4;
            } else if (valor === '9') {
              return treeMaxHeight > 4 && treeMaxHeight <= 9;
            } else if (valor === '+9') {
              return treeMaxHeight > 9;
            }
            return true; // Para otros valores que no sean los grupos específicos
          });
        } else if (clave === 'sidewalk_size') {
          if (valor === 'small') {
            filteredTrees = filteredTrees.filter(
              (tree) => tree.sidewalk_size === 'small'
            );
          } else if (valor === 'medium') {
            filteredTrees = filteredTrees.filter(
              (tree) =>
                tree.sidewalk_size === 'small' ||
                tree.sidewalk_size === 'medium'
            );
          }
        } else if (typeof valor === 'string') {
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
