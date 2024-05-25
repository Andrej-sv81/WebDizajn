// src/app/models/korisnik.model.ts
export class Korisnik {
    id: string;
    adresa: string;
    datumRodjenja: string;
    email: string;
    ime: string;
    korisnickoIme: string;
    lozinka: string;
    prezime: string;
    telefon: string;
    zanimanje: string;
  
    constructor(id: string, adresa: string, datumRodjenja: string, email: string, ime: string, 
                korisnickoIme: string, lozinka: string, prezime: string, telefon: string, 
                zanimanje: string) {
      this.id = id;
      this.adresa = adresa;
      this.datumRodjenja = datumRodjenja;
      this.email = email;
      this.ime = ime;
      this.korisnickoIme = korisnickoIme;
      this.lozinka = lozinka;
      this.prezime = prezime;
      this.telefon = telefon;
      this.zanimanje = zanimanje;
    }
  }
  