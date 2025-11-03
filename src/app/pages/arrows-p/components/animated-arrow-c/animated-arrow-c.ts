import { Component, input } from '@angular/core';

@Component({
  selector: 'app-animated-arrow',
  templateUrl: './animated-arrow-c.html',
  styleUrl: './animated-arrow-c.css',
})
export class AnimatedArrowC {
  distance = input<number>(60);
  duration = input<number>(1.5);
  color = input<string>('text-orange-500');



  get styles() {
    const shaftOriginalLength = 30;
    const stretchFactor = 1 + (this.distance() / shaftOriginalLength);

    return {
      '--arrow-distance': `${this.distance()}px`,
      '--arrow-duration': `${this.duration()}s`,
      '--arrow-stretch': stretchFactor.toString()
    };
  }



}
