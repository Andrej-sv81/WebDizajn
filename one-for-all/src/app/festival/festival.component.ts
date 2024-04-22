import { Component } from '@angular/core';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.css']
})
export class FestivalComponent {
  tip: any;
  naziv: any;
  prevoz: any;
  cena: any;
  maxOsoba: any;
  opis: any;
  images = [
    { url: 'https://i.imgur.com/OV15WM6.jpeg', name: 'BeoArt Fest' },
    { url: 'https://i.imgur.com/jsFrKCn.jpeg', name: 'Etno Srbija' },
    { url: 'https://i.imgur.com/NhAzBBF.jpeg', name: 'Lazarevac Fest' },
    { url: 'https://i.imgur.com/k4nEZm6.jpeg', name: 'Dunavski Horizonti' },
    { url: 'https://i.imgur.com/nmAOOHF.jpeg', name: 'Urban Beat' },
  ];
}
