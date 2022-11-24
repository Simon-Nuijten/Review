export interface Beer {  
    id: string;
    name : string | undefined;
    description:string | undefined;
    alcohol:number | undefined;
    price : number | undefined;
  
  }
  export interface BeerDetails {
    [key: number]: Beer; //Or string instead of number
  }
  