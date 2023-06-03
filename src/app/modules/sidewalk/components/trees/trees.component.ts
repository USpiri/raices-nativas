import { Component } from '@angular/core';
import { Tree } from 'src/app/models/tree.interface';
import { TREES } from 'src/assets/data/tree.mock';

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.scss'],
})
export class TreesComponent {
  trees: Tree[] = TREES;
}
