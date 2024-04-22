import { Component } from '@angular/core';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.css']
})
export class FestivalComponent {
  tip: string = 'Muzički';
  naziv: string = 'Festival Grčkih Melodija';
  prevoz: string = 'Autobus';
  cena: string = '1500' + ' RSD';
  maxOsoba: number = 300;
  opis: string = 'Istražite bogatstvo grčke muzičke tradicije kroz niz koncerata i radionica, gde će vas voditi kroz istoriju grčke muzike, od antike do modernih dana, uz prelepi ambijent Sitonije.';
  images = [
    { url: 'https://i.imgur.com/LMOgMnP.jpeg'},
    { url: 'https://i.imgur.com/yBtIoEE.jpeg'},
    { url: 'https://i.imgur.com/aHRcuqe.jpeg'},
    { url: 'https://i.imgur.com/HxEZ2EO.jpeg'},
    { url: 'https://i.imgur.com/WhhEFXe.jpeg'},
  ];
}
