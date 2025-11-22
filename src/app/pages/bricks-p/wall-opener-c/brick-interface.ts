export interface Brick {
  id: number;
  line: number; // Column position, used to calculate delay
  direction: 'left' | 'right'; // Folding direction: 'left' or 'right'
  delay: number; // Calculated animation delay
}

export interface RowBricks {
  bricks: Brick[];
}
