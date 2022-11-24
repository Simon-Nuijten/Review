import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beer } from 'libs/objects/src/lib/beer';
import { BeerService } from '../../../../../libs/services/src/lib/beer.service'

@Component({
  selector: 'review-angular-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {

  id: string | null | undefined;
  beer: Beer | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private serviceBeer: BeerService) { 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get("id");
      if (this.id) {
          this.beer = this.serviceBeer.getBeerById(this.id);
      } else{
        this.router.navigateByUrl('concerten');
      }
    });
  }
}
