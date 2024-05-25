import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';
import { Festival } from '../models/festival-model';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.css']
})
export class FestivalComponent implements OnInit{

  id: string | null | undefined;
  fest: Festival | undefined;

  constructor(private route: ActivatedRoute, private service: MainService){};

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('festId');
    if(this.id){
      this.service.getFestival(this.id)?.subscribe(data => {
        this.fest = data;
    })
  }
  }
  
}

