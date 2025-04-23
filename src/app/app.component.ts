import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product.model';
import { ProductComponent } from './product/product.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet,ProductComponent,KoszykComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taiib_zadanie';

  produkty: Product[] = [
    new Product("Produkt1",20.00,new Date(2025,3,10), false),
    new Product("Produkt2",30.00,new Date(2024,3,10), true),
    new Product("Produkt3",40.00,new Date(2023,3,10), false),
    new Product("Produkt4",50.00,new Date(2022,3,10), true),
    new Product("Produkt5",60.00,new Date(2021,3,10), false),
  ];

  wartoscKoszyka: number = 0;

  dodajDoKoszyka(product: Product)
  {
    this.wartoscKoszyka += product.cena;
    product.liczbaSztukWKoszyku++;
  }

  pokazProdukt: boolean = true;

  ukryjProdukty() {
    this.pokazProdukt = !this.pokazProdukt;
  }

  wyczyscKoszyk() {
    this.wartoscKoszyka = 0;
    this.produkty.forEach(p => p.liczbaSztukWKoszyku = 0);
  }
}
