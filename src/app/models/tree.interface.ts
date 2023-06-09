export interface Tree {
  name: string;
  name_sc: string;
  sidewalk_size: TreeSidewalk;
  max_height: number;
  perennial: boolean;
  thorns: boolean;
  use_case: TreeUseCase;
  description: string;
  long_description: string;
  image: string;
}

export type TreeSidewalk = 'small' | 'medium' | 'large';
export type TreeUseCase = 'ornamental' | 'shadows' | 'others';
