import { Component, Input } from '@angular/core';
import { Tree } from 'src/app/models/tree.interface';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent {
  @Input({ required: true }) tree: Tree = {
    name: '',
    name_sc: '',
    sidewalk_size: 'narrow',
    max_height: 0,
    perennial: false,
    thorns: false,
    use_case: 'ornamental',
    description: '',
    long_description: '',
    image: '',
  };
}
