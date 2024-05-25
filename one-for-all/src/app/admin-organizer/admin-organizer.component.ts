import { Component } from '@angular/core';
import { Organizator } from '../models/organizator-model';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { Festival } from '../models/festival-model';

@Component({
  selector: 'app-admin-organizer',
  templateUrl: './admin-organizer.component.html',
  styleUrls: ['./admin-organizer.component.css']
})
export class AdminOrganizerComponent {


  organizatori: Organizator[] = [];
  selectedOrganizerId: string | undefined;
  selectedOrganizer: Organizator | undefined;
  festivals: Festival[] | undefined;
  selectedFestId: string | undefined;
  
  constructor(private router: Router, private service: MainService){};

  ngOnInit(): void {
    this.service.getOrganizatori().subscribe(data => {
      this.organizatori = data;
      this.onOrganizerinit(this.organizatori[0].id);
      this.selectedOrganizerId = this.organizatori[0].id;
    });
  }

  onOrganizerChange(event: Event): void {
    const selectedId = (event.target as HTMLSelectElement).value;
    if (selectedId) {
      this.service.getOrganizator(selectedId)?.subscribe(
        data => {
          this.selectedOrganizer = data;
          this.service.getFestivals(this.selectedOrganizer.festivali)?.subscribe(
            data => {
              this.festivals = data;
              this.selectedFestId = this.festivals[0].id;
          });
        }
      );
    }
  }

  onOrganizerinit(id: string): void {
    if (id) {
      this.service.getOrganizator(id)?.subscribe(
        data => {
          this.selectedOrganizer = data;
          this.service.getFestivals(this.selectedOrganizer.festivali)?.subscribe(
            data => {
              this.festivals = data;
              this.selectedFestId =this.festivals[0].id;
          });
        }
      );
    }
  }

  onFestChange($event: Event): void {

  }
}
