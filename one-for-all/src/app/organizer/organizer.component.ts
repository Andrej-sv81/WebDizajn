import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent {
constructor(private router: Router){};

imageClick() {
    this.router.navigate(['/festival', 1]);
}

imageUrl: string = 'https://i.imgur.com/OV15WM6.jpeg';
address: string = 'Knez Mihailova 48, Beograd, 11000';
year: number = 2015;
naziv: string = 'BeoArt Fest';
telefon: string ='011/3042-568';
mail: string = 'kontakt@beoartfest.rs';

images = [
  { url: 'https://i.imgur.com/LMOgMnP.jpeg', name: 'Festival Grčkih Melodija' },
  { url: 'https://i.imgur.com/13NPfCE.jpeg', name: 'Atoski Slikarski Dnevnik' },
  { url: 'https://i.imgur.com/zHG54w5.jpeg', name: 'Karneval u Platamonu' },
  { url: 'https://i.imgur.com/S6vhQ9h.jpeg', name: 'Egejske Kulturne Noći' },
  { url: 'https://i.imgur.com/QORUNqY.jpeg', name: 'Vrasna Etno Festival' },
];

}
