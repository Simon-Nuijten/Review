import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beer } from 'libs/objects/src/lib/beer';
import { BeerService } from '../../../../../libs/services/src/lib/beer.service'

@Component({
  selector: 'review-angular-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private beerService: BeerService) {}

  id: string | null | undefined;
  beer: Beer = {
    id: '',
    name: '',
    description : '',
    alcohol: 0,
    price: 0
  }
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get("id");
      if (this.id) {
          this.beer = this.beerService.getBeerById(this.id);
      } else{
        this.router.navigateByUrl('overview');
      }
  });
}
  onSubmit() {
    this.beerService.editBeer(this.beer);
    this.router.navigateByUrl('overview');
  }
  
}
