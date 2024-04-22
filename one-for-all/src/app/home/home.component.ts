import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

images = [
    { url: 'https://i.imgur.com/OV15WM6.jpeg', name: 'BeoArt Fest' },
    { url: 'https://i.imgur.com/jsFrKCn.jpeg', name: 'Etno Srbija' },
    { url: 'https://i.imgur.com/NhAzBBF.jpeg', name: 'Lazarevac Fest' },
    { url: 'https://i.imgur.com/k4nEZm6.jpeg', name: 'Dunavski Horizonti' },
    { url: 'https://i.imgur.com/nmAOOHF.jpeg', name: 'Urban Beat' },
];
constructor(private router: Router){};

imageClick() {
  this.router.navigate(['/organizer', 1]);
}

ngOnInit(): void {
}

}

