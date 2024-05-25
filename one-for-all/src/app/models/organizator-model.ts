// src/app/models/organizator.model.ts
export class Organizator {
    id: string;
    adresa: string;
    email: string;
    festivali: string;
    godinaOsnivanja: string;
    kontaktTelefon: string;
    logo: string;
    naziv: string;
  
    constructor(id: string, adresa: string, email: string, festivali: string, godinaOsnivanja: string,
                kontaktTelefon: string, logo: string, naziv: string) {
      this.id = id;              
      this.adresa = adresa;
      this.email = email;
      this.festivali = festivali;
      this.godinaOsnivanja = godinaOsnivanja;
      this.kontaktTelefon = kontaktTelefon;
      this.logo = logo;
      this.naziv = naziv;
    }
  }
  