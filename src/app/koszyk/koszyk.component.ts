import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-koszyk',
  imports: [CommonModule],
  templateUrl: './koszyk.component.html',
  styleUrl: './koszyk.component.css'
})
export class KoszykComponent {
  @Input() wartoscKoszyka: number = 0;
  @Output() zeruj = new EventEmitter<void>();

  resetKoszyka() {
    this.zeruj.emit();
  }
}
