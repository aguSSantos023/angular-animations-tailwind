import { AfterViewInit, Component, signal } from '@angular/core';
import { Brick, RowBricks } from './brick-interface';
import { AnimatedBrickC } from "./animated-brick-c/animated-brick-c";

@Component({
  selector: 'app-wall-opener-c',
  imports: [AnimatedBrickC],
  templateUrl: './wall-opener-c.html',
  styleUrl: './wall-opener-c.css',
})
export class WallOpenerC implements AfterViewInit {

  private initialDelay = signal<number>(2); // Delay before animation starts
  private horizontalDelayIncrement = signal<number>(0.2);
  private verticalDelayIncrement = signal<number>(0.05)
  public isOpen = signal<boolean>(false); // Variable to control whether the animation should start


  public wallStructure = signal<RowBricks[]>([]);


  ngAfterViewInit(): void {

    this.generateWall()

    setTimeout(() => {

      this.isOpen.set(true);

    }, this.initialDelay() * 1000);

  }


  private generateRowSizes(): number[] {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Define effective brick dimensions
    const brickWidthTotal = 84; // 80px (w-20) + 4px (gap-x-1)
    const brickHeightTotal = 36; // 30px (h-8) + 4px (mb-1)


    // Calculation of the quantity of bricks
    // Bricks Across: Number of bricks that fit in the width
    let bricksPerWidth = Math.ceil(screenWidth / brickWidthTotal);

    // Bricks in Vertical: Number of rows that fit in height
    let bricksPerHeight = Math.ceil(screenHeight / brickHeightTotal);


    // Add extra margin (2 units)
    bricksPerWidth += 2;
    bricksPerHeight += 2;

    // Generate the rowSizes matrix
    const rowSizes: number[] = [];

    // Generate the array with an alternation of: [N, N-1, N, N-1, ...]
    for (let r = 0; r < bricksPerHeight; r++) {

      if (r % 2 === 0) {
        rowSizes.push(bricksPerWidth);
      }else {
        rowSizes.push(Math.max(1, bricksPerWidth - 1));
      }

    }

    return rowSizes
  }



  private generateWall(): void {
    // Flexible row definition
    const rowSizes = this.generateRowSizes();

    const rows: RowBricks[] = [];
    let brickId = 1;

    const totalRows = rowSizes.length;
    // Calculate the vertical center
    const verticalCenterIndex = (totalRows - 1) / 2;

    // 'r' for the row index to calculate the vertical distance
    for (let r = 0; r < totalRows; r++) {
      const rowSize = rowSizes[r];
      const rowBricks: Brick[] = [];
      const centerIndex = (rowSize - 1) / 2;

      // Calculating the Vertical Delay
      // Absolute distance from the row to the vertical center
      const rowDistance = Math.abs(verticalCenterIndex - r);
      let rowBaseDelay = rowDistance * this.verticalDelayIncrement();

      const randomValue = Math.random();
      if (randomValue <= 0.3) rowBaseDelay -= 0.2; // Uniformity Vertical

      for (let i = 0; i < rowSize; i++) {
        let direction: 'left' | 'right';
        let distanceToCenter: number;

        // Calculation of Horizontal Direction and Distance

        if (i <= centerIndex) {

          direction = 'right';
          distanceToCenter = centerIndex - i;

        }else {

          direction = 'left';
          distanceToCenter = i - centerIndex;

        }

        // Calculating the Horizontal Delay
        const delayIndexHorizontal = Math.floor(distanceToCenter);
        let delayHorizontal = delayIndexHorizontal * this.horizontalDelayIncrement();

        const randomValue = Math.random();
        if (randomValue <= 0.2) delayHorizontal -= 0.15; // Uniformity Horizontal


        // Calculation of the total delay
        const customDelayTotal = delayHorizontal + rowBaseDelay;

        // Creation of the brick
        rowBricks.push(
          this.createBrick(
            brickId++,
            delayIndexHorizontal + 1,
            direction,
            customDelayTotal
          )
        );
      }

      // Add the row
      rows.push({ bricks: rowBricks } as RowBricks);
    }

    this.wallStructure.set(rows);
  }



  // Auxiliary function to simplify brick creation
  private createBrick(
    id: number,
    distanceToCenter: number,
    direction: 'left' | 'right',
    customDelay: number
  ): Brick {
    return {
      id: id,
      line: distanceToCenter,   // We will use 'distanceToCenter' for the opening logic
      direction: direction,
      delay: customDelay,       // Formula: Calculated_Delay = (center_distance * increment)
    };
  }


}
