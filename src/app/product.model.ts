export class Product {
  nazwa: string;
  cena: number;
  dataUtworzenia: Date;
  czyPromocja: boolean;
  liczbaSztukWKoszyku: number;

  constructor(nazwa: string,cena: number,dataUtworzenia: Date,czyPromocja: boolean,) {
    this.nazwa = nazwa;
    this.cena = cena;
    this.dataUtworzenia = dataUtworzenia;
    this.czyPromocja = czyPromocja;
    this.liczbaSztukWKoszyku = 0;
  }
}