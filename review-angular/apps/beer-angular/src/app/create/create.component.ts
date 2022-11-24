import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from 'libs/objects/src/lib/beer';
import { BeerService } from 'libs/services/src/lib/beer.service';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'review-angular-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  beer: Beer = {
    id: "",
    name: "",
    description: "",
    price: 0,
    alcohol: 0,
};

  constructor(private router: Router, private beerService: BeerService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.beerService.addBeer(this.beer);
    this.router.navigateByUrl('overview');
  }
}
