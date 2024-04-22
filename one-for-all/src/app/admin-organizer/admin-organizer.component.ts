import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-organizer',
  templateUrl: './admin-organizer.component.html',
  styleUrls: ['./admin-organizer.component.css']
})
export class AdminOrganizerComponent {
  names = [
    { id: 1, name: 'BeoArt Fest'},
    { id: 2, name: 'Etno Srbija'},
    { id: 3, name: 'Lazarevac Fest'},
    { id: 4, name: 'Dunavski Horizonti'},
    { id: 5, name: 'Urban Beat'},
];

namesFest = [
  { id: 1, name: 'Festival Grčkih Melodija'},
  { id: 2, name: 'Atoski Slikarski Dnevnik'},
  { id: 3, name: 'Karneval u Platamonu'},
  { id: 4, name: 'Egejske Kulturne Noći'},
  { id: 5, name: 'Vrasna Etno Festival'},
];

imageUrl: any;
naziv: string = 'BeoArt Fest';
year: number = 2015;
address: string = 'Knez Mihailova 48, Beograd, 11000';
telefon: string ='011/3042-568';
mail: string = 'kontakt@beoartfest.rs';

}
