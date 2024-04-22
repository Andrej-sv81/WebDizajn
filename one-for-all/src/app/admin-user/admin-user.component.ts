import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent {

names = [
  { id: 1, name: 'petar_p'},
  { id: 2, name: 'jovana_j'},
  { id: 3, name: 'markom'},
  { id: 4, name: 'filipf'},
  { id: 5, name: 'tijanat'},
];
telefon: string ='011/3042-568';
mail: string = 'kontakt@beoartfest.rs';
kime: string = 'petar_p';
ime: string = 'Petar';
prezime: string = 'Pavlović';
lozinka: string = 'novapetar321';
zanimanje: string = 'novapetar321';
adresa: string = 'Bulevar Oslobođenja 101, Novi Sad, 21000';
datums: string = '1994-10-22';

}
