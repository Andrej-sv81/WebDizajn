import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Organizator } from '../models/organizator-model';
import { MainService } from '../main.service';
import { Festival } from '../models/festival-model';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent {

id: string | null | undefined
org: Organizator | undefined;
festivals: Festival[] | undefined;
constructor(private router: Router, private route: ActivatedRoute, private service: MainService){};

imageClick(id: string) {
    this.router.navigate(['/festival', this.org?.festivali + '/' + id]);
}

ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('orgId');
  if(this.id){
    this.service.getOrganizator(this.id)?.subscribe(data => {
      this.org = data;
      this.service.getFestivals(this.org.festivali).subscribe(data => {
        this.festivals = data;
    })

    })
    }
  }
}
