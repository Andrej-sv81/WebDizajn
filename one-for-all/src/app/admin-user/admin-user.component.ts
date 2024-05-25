import { Component } from '@angular/core';
import { MainService } from '../main.service';
import { Korisnik } from '../models/korisnik-model';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent {
  users: Korisnik[] = [];
  selectedUserId: string | undefined;
  selectedUser: Korisnik | undefined;
  ime: string = ''
  constructor(private service: MainService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      data => {
        this.users = data;
        if (data.length > 0) {
          this.selectedUserId = data[0].id;
          this.onUserChange(this.selectedUserId); 
        }
      }
    );
  }

  onUserChange(userId: string): void {
    if (userId) {
      this.service.getUserById(userId).subscribe(
        data => {
          this.selectedUser = data;
          this.ime = this.selectedUser.korisnickoIme;
        }
      );
    }
  }

  onUserSelect(event: Event){
    const selectedId = (event.target as HTMLSelectElement).value;
    if(selectedId){
      this.onUserChange(selectedId);
    }
  }
}
