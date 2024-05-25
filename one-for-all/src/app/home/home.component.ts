import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organizator } from '../models/organizator-model';
import { MainService } from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

organizatori: Organizator[] = [];

constructor(private router: Router, private service: MainService){};

imageClick(id: string) {
  this.router.navigate(['/organizer', id]);
}

ngOnInit(): void {
  this.service.getOrganizatori().subscribe(data => {
    this.organizatori = data;
  });
}

}

