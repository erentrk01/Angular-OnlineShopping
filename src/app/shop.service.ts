import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  orders:Order[]=[];
  basket:Product[]=[];
  constructor() { }
}

export type Order={
  cost:number,
  count:number,
  orderInfo:Product[]

}
 export type Product={
  "id": string,
  "Name": string,
  "Price": number,
  "quantity":number,
  "unit": string,
  "path":string,
  "info":string,
  "related":string
};

