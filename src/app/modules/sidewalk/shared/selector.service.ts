import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TreeSidewalk } from 'src/app/models/tree.interface';

@Injectable({
  providedIn: 'root',
})
export class SelectorService {
  private selectedValueSubject = new BehaviorSubject<TreeSidewalk>(null);
  selectedValue = this.selectedValueSubject.asObservable();

  setSidewalkSize(state: TreeSidewalk) {
    this.selectedValueSubject.next(state);
  }
}
