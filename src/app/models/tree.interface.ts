export interface Tree {
  name: string;
  name_sc: string;
  sidewalk_size: TreeSidewalk;
  max_height: number;
  perennial: boolean;
  throns: boolean;
  use_case: TreeUseCase;
  description: string;
  image: string;
}

export type TreeSidewalk = 'Angosta' | 'Mediana' | 'Ancha';
export type TreeUseCase = 'Ornamental' | 'Sombra' | 'Otros';
