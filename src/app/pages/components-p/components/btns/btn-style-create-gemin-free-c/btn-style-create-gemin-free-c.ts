import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-style-create-gemin-free-c',
  imports: [],
  templateUrl: './btn-style-create-gemin-free-c.html',
  styleUrl: './btn-style-create-gemin-free-c.css',
})
export class BtnStyleCreateGeminFreeC {
  @Input() text: string = 'Hacer Acción';
  @Input() color: string = '#4CAF50'; // Color de fondo principal

  // Evento de salida
  @Output() actionExecuted = new EventEmitter<void>();

  // Estado interno
  public isActive: boolean = false;
  public isExecuting: boolean = false;

  /**
   * Maneja el clic en el botón.
   * Inicia la animación de activación y luego ejecuta la acción.
   */
  onClick(): void {
    if (this.isExecuting) return; // Evita clics múltiples

    // 1. Inicia la animación (Estado Activo)
    this.isActive = true;
    this.isExecuting = true;

    // 2. Ejecuta la acción después de un breve retraso para la animación
    setTimeout(() => {
      this.actionExecuted.emit(); // Emite el evento de la acción

      // 3. Reinicia el estado después de la acción (simulamos 500ms de ejecución)
      setTimeout(() => {
        this.isActive = false;
        this.isExecuting = false;
      }, 500);

    }, 300); // Duración de la animación inicial (300ms)
  }
}
