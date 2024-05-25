import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Organizator } from './models/organizator-model';
import { Observable, map } from 'rxjs';
import { Festival } from './models/festival-model';
import { Korisnik } from './models/korisnik-model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private dbUrl = 'https://wb-data-3e9c4-default-rtdb.asia-southeast1.firebasedatabase.app';


  constructor(private http: HttpClient) { }

  getOrganizatori(): Observable<Organizator[]> {
    return this.http.get<Organizator[]>(`${this.dbUrl}/organizatoriFestivala.json`).pipe(
      map(responseData => {
        const organizatorsArray: Organizator[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            const organizatorData = responseData[key];
            const organizator: Organizator = {
              id: key,
              adresa: organizatorData.adresa,
              email: organizatorData.email,
              festivali: organizatorData.festivali,
              godinaOsnivanja: organizatorData.godinaOsnivanja,
              kontaktTelefon: organizatorData.kontaktTelefon,
              logo: organizatorData.logo,
              naziv: organizatorData.naziv
            };
            organizatorsArray.push(organizator);
          }
        }
        return organizatorsArray;
      })
    );
  }

  getOrganizator(id: string): Observable<Organizator> | null{
    return this.http.get<Organizator>(`${this.dbUrl}/organizatoriFestivala/${id}.json`).pipe(
      map(responseData => {
            const organizator: Organizator = {
              id: id,
              adresa: responseData.adresa,
              email: responseData.email,
              festivali: responseData.festivali,
              godinaOsnivanja: responseData.godinaOsnivanja,
              kontaktTelefon: responseData.kontaktTelefon,
              logo: responseData.logo,
              naziv: responseData.naziv
            };
            return organizator;
      })
    );
  }
  
  getFestivals(id: string): Observable<Festival[]> {
    return this.http.get<Festival[]>(`${this.dbUrl}/festivali/${id}.json`).pipe(
      map(responseData => {
        const festivalsArray: Festival[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            const festivalData = responseData[key];
            const festival: Festival = {
              id: key,
              cena: festivalData.cena,
              maxOsoba: festivalData.maxOsoba,
              naziv: festivalData.naziv,
              opis: festivalData.opis,
              prevoz: festivalData.prevoz,
              slike: festivalData.slike,
              tip: festivalData.tip
            };
            festivalsArray.push(festival);
          }
        }
        return festivalsArray;
      })
    );
  }

  getFestival(id: string): Observable<Festival> | null {
    return this.http.get<Festival>(`${this.dbUrl}/festivali/${id}.json`).pipe(
      map(responseData => {
            const festival: Festival = {
              id: id.split('/')[1],
              cena: responseData.cena,
              maxOsoba: responseData.maxOsoba,
              naziv: responseData.naziv,
              opis: responseData.opis,
              prevoz: responseData.prevoz,
              slike: responseData.slike,
              tip: responseData.tip,
            };
            return festival;
      })
    );
  }

  getUsers(): Observable<Korisnik[]> {
    return this.http.get<Korisnik[]>(`${this.dbUrl}/korisnici.json`).pipe(
      map(responseData => {
        const usersArray: Korisnik[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            const userData = responseData[key];
            const user: Korisnik = {
              id: key,
              adresa: userData.adresa,
              datumRodjenja: userData.datumRodjenja,
              email: userData.email,
              ime: userData.ime,
              korisnickoIme: userData.korisnickoIme,
              lozinka: userData.lozinka,
              prezime: userData.prezime,
              telefon: userData.telefon,
              zanimanje: userData.zanimanje
            };
            usersArray.push(user);
          }
        }
        return usersArray;
      })
    );
  }

  getUserById(id: string): Observable<Korisnik> {
    return this.http.get<Korisnik>(`${this.dbUrl}/korisnici/${id}.json`).pipe(
      map(responseData => {
        const user: Korisnik = {
          id: id,
          adresa: responseData.adresa,
          datumRodjenja: responseData.datumRodjenja,
          email: responseData.email,
          ime: responseData.ime,
          korisnickoIme: responseData.korisnickoIme,
          lozinka: responseData.lozinka,
          prezime: responseData.prezime,
          telefon: responseData.telefon,
          zanimanje: responseData.zanimanje
        };
        return user;
      })
    );
  }
}
