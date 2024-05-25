// src/app/models/festival.model.ts
export class Festival {
    id: string;
    cena: number;
    maxOsoba: number;
    naziv: string;
    opis: string;
    prevoz: string;
    slike: string[];
    tip: string;
  
    constructor(id: string, cena: number, maxOsoba: number, naziv: string, opis: string, 
                prevoz: string, slike: string[], tip: string) {
      this.id = id;
      this.cena = cena;
      this.maxOsoba = maxOsoba;
      this.naziv = naziv;
      this.opis = opis;
      this.prevoz = prevoz;
      this.slike = slike;
      this.tip = tip;
    }
  }
  