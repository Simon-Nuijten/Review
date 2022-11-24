/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from 'libs/objects/src/lib/beer';
import { BeerService } from '../../../../../libs/services/src/lib/beer.service'


@Component({
  selector: 'review-angular-beeroverview',
  templateUrl: './beeroverview.component.html',
  styleUrls: ['./beeroverview.component.css'],
})
export class BeeroverviewComponent implements OnInit {
  [x: string]: any;
  beersList: Beer[] = [];
  constructor(private route:ActivatedRoute, private beerService: BeerService) {}
  

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers(): void {
    this.beersList = this.beerService.getBeers();
    console.log(this.beersList);
  }
  deleteBeer(beer: Beer): void {
    this.beerService.removeBeer(beer.id);
    this.getBeers();
  }
}
