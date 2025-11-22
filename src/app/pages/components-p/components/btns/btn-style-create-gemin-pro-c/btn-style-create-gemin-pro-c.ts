import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-btn-style-create-gemin-pro-c',
  imports: [],
  template: `
    <button
      class="cyber-btn"
      [class.active]="isAnimating()"
      [style.--main-color]="color()"
      (click)="triggerAction()">

      <span class="btn-content">
        {{ label() }}
      </span>
      <div class="shimmer"></div>
    </button>
  `,
  styles: [`
    .cyber-btn {
      position: relative;
      border: none;
      background: #1a1a1a;
      color: white;
      padding: 1rem 2.5rem;
      font-size: 1.1rem;
      font-weight: bold;
      border-radius: 12px;
      cursor: pointer;
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3),
                  0 0 0 2px var(--main-color);
      transform-style: preserve-3d;
    }

    /* Estado de reposo con brillo suave */
    .cyber-btn:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 10px 20px rgba(0,0,0,0.4),
                  0 0 15px var(--main-color);
    }

    /* Estado ACTIVO (Animación de clic) */
    .cyber-btn.active {
      transform: scale(0.92) translateY(2px);
      box-shadow: 0 0 5px var(--main-color) inset;
      opacity: 0.8;
    }

    .btn-content {
      position: relative;
      z-index: 2;
      letter-spacing: 1px;
    }

    /* Efecto de brillo que pasa */
    .shimmer {
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        to right,
        transparent,
        rgba(255,255,255,0.3),
        transparent
      );
      transform: skewX(-25deg);
      transition: 0.5s;
    }

    .cyber-btn:hover .shimmer {
      left: 150%;
      transition: 0.7s ease-in-out;
    }
  `]
})
export class BtnStyleCreateGeminProC {

  // Inputs configurables
  label = input.required<string>();
  color = input<string>('#00ff88'); // Color por defecto (verde neón)

  // Output del evento
  action = output<void>();

  // Estado interno
  isAnimating = signal(false);

  triggerAction() {
    if (this.isAnimating()) return; // Evita doble clic

    this.isAnimating.set(true);

    // Espera a que la animación visual ocurra (300ms-600ms) antes de emitir
    setTimeout(() => {
      this.action.emit();
      this.isAnimating.set(false);
    }, 400);
  }

}
