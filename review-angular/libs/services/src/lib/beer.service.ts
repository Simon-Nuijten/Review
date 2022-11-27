/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Injectable } from '@angular/core';
import { Console } from 'console';
import { Review } from 'libs/objects/src/lib/review';
import { Beer } from '../../../../libs/objects/src/lib/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
 
  private beerList: Beer[] = [];
  private reviewList: Review[] = [];
  constructor() {
    this.reviewList = []
    this.beerList = [
      {
        id: '1',
        name: 'Amster pils',
        description: 'De Music of the Spheres World Tour is de achtste concerttournee die momenteel wordt ondernomen door de Britse rockband Coldplay. Het werd aangekondigd op 14 oktober 2021 ter ondersteuning van hun negende studioalbum Music of the Spheres en markeerde een terugkeer naar live optreden na de COVID-19-pandemie.',
        price: 3.45,
        alcohol: 5.5,
        review: [
          {id: '1', beerId: '1', rating: 5, comment: 'Heerlijk'},
          {id: '2', beerId: '1', rating: 4, comment: 'Goed'},
          {id: '3', beerId: '1', rating: 3, comment: 'Gemiddeld'}
        ]
      },
      {
        id: '2',
        name: 'Heiniken',
        description: 'De Music of the Spheres World Tour is de achtste concerttournee die momenteel wordt ondernomen door de Britse rockband Coldplay. Het werd aangekondigd op 14 oktober 2021 ter ondersteuning van hun negende studioalbum Music of the Spheres en markeerde een terugkeer naar live optreden na de COVID-19-pandemie.',
        price: 3.45,
        alcohol: 5.5,
        review: [
          {id: '1', beerId: '2', rating: 5, comment: 'Heerlijk'},
          {id: '2', beerId: '2', rating: 4, comment: 'Goed'},
          {id: '3', beerId: '2', rating: 3, comment: 'Gemiddeld'}
        ]
      },
      {
        id: '3',
        name: 'Jupiler',
        description: 'De Music of the Spheres World Tour is de achtste concerttournee die momenteel wordt ondernomen door de Britse rockband Coldplay. Het werd aangekondigd op 14 oktober 2021 ter ondersteuning van hun negende studioalbum Music of the Spheres en markeerde een terugkeer naar live optreden na de COVID-19-pandemie.',
        price: 3.45,
        alcohol: 5.5,
        review: [
          {id: '1', beerId: '3', rating: 5, comment: 'Heerlijk'},
          {id: '2', beerId: '3', rating: 4, comment: 'Goed'},
          {id: '3', beerId: '3', rating: 3, comment: 'Gemiddeld'}
        ]
      },
    ];
  }

  public getBeers(): Beer[] {
    return this.beerList;
  }

  public getBeerById(id: string): Beer {
    return this.beerList.filter((beer: Beer) => beer.id === id)[0];
  }
  public addBeer(beer: Beer): void {
    const id = (this.beerList.length) + 1;
    beer.id = id.toString();
    this.beerList.push(beer);
  }
  public removeBeer(id: string): void {
    this.beerList = this.beerList.filter((beer: Beer) => beer.id !== id);
  }
  public editBeer(beer: Beer): void {
    for( let i = 0; i < this.beerList.length; i++){ 
      if ( this.beerList[i].id === beer.id ) { 
          this.beerList[i].name           = beer.name;
          this.beerList[i].description    = beer.description;
          this.beerList[i].alcohol  = beer.alcohol;
          this.beerList[i].price    = beer.price;
      }
    }
  }
  public getReviewForBeer(id: string) {
    const beer = this.beerList.filter((beer: Beer) => beer.id === id)[0];
    return beer.review;
  }
  public getReviewByID(id: string, reviewID: string): Review | null{
    const beer = this.beerList.filter((beer: Beer) => beer.id === id)[0];
    if(beer.review != undefined){
      return beer.review.filter((review: Review) => review.id === reviewID)[0];
    } else {
      return null;
    }
  }
  addReview(review: Review) {
    const beer = this.beerList.filter((beer: Beer) => beer.id === review.beerId)[0];
    const id = (beer.review!.length) + 1;
    review.id = id.toString();
    beer.review?.push(review);    
  }
  removeReview(gettonReview: Review){
    const beerFilterd = this.beerList.filter((beer: Beer) => beer.id === gettonReview.beerId)[0];
    const index = beerFilterd.review!.findIndex(item => item.id === gettonReview.beerId);
    beerFilterd.review?.splice(index!, 1);
  }
}
