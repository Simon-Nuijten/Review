/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Injectable } from '@angular/core';
import { Console } from 'console';
import { Beer } from '../../../../libs/objects/src/lib/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private beerList: Beer[] = [];
  constructor() {
    //Seed data
    this.beerList = [
      {
        id: '1',
        name: 'Amster pils',
        description: 'De Music of the Spheres World Tour is de achtste concerttournee die momenteel wordt ondernomen door de Britse rockband Coldplay. Het werd aangekondigd op 14 oktober 2021 ter ondersteuning van hun negende studioalbum Music of the Spheres en markeerde een terugkeer naar live optreden na de COVID-19-pandemie.',
        price: 3.45,
        alcohol: 5.5,
      },
      {
        id: '2',
        name: 'Heiniken',
        description: 'De Music of the Spheres World Tour is de achtste concerttournee die momenteel wordt ondernomen door de Britse rockband Coldplay. Het werd aangekondigd op 14 oktober 2021 ter ondersteuning van hun negende studioalbum Music of the Spheres en markeerde een terugkeer naar live optreden na de COVID-19-pandemie.',
        price: 3.45,
        alcohol: 5.5,
      },
      {
        id: '3',
        name: 'Jupiler',
        description: 'De Music of the Spheres World Tour is de achtste concerttournee die momenteel wordt ondernomen door de Britse rockband Coldplay. Het werd aangekondigd op 14 oktober 2021 ter ondersteuning van hun negende studioalbum Music of the Spheres en markeerde een terugkeer naar live optreden na de COVID-19-pandemie.',
        price: 3.45,
        alcohol: 5.5,
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
}
