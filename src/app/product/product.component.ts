import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() dodajDoKoszyka = new EventEmitter<Product>();

  pokazProdukty : boolean = true;

  zmianaProdukty() {
    this.pokazProdukty = !this.pokazProdukty;
  }

  dodanieDoKoszyka() {
    this.dodajDoKoszyka.emit(this.product);
  }
   

}
