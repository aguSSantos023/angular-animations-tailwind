import { Component, input } from '@angular/core';
import { Brick } from '../brick-interface';

@Component({
  selector: 'app-animated-brick-c',
  imports: [],
  templateUrl: './animated-brick-c.html',
  styleUrl: './animated-brick-c.css',
})
export class AnimatedBrickC {
  brickData = input.required<Brick>()
  isOpening = input.required<Boolean>()



}
