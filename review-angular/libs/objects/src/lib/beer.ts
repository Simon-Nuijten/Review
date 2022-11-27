import { Review } from "./review";

export interface Beer {  
    id: string;
    name : string | undefined;
    description:string | undefined;
    alcohol:number | undefined;
    price : number | undefined;
    review? : Review[]  | undefined;
  } 
  export interface BeerDetails {
    [key: number]: Beer; 
  }
  