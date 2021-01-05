export interface Car {
  id:string;
  model: string;
  make: string;
  year: number;
  picture: string;
  description:{
    price: number;
    priceType:string;
    location: string;
    condition: string;
    engine: string;
    color: string;
    body: string;
    transsmission:string;
  };
}
