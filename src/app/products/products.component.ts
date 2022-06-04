import { Component } from '@angular/core';
import {items} from "../products";
import {ShopService,Order,Product  } from "../shop.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  constructor(private shopService:ShopService){}
  title = 'shop';
  products=items;
  basket:Product[]=[];
 ngOnInit(){
   this.basket=this.shopService.basket;
 }
  getTotal():number{
    let  total=0;
    for(let item of this.basket)
    {
      total+=item.quantity*item.Price;
    }
    return total;
  }
  decraseAmount(product:Product) :void
  {
    if(product.quantity===0)
    return;

    product.quantity-=1;
   this.removeIf0(product);

  }

  increaseAmount(product:Product):void{
       
   this.addIfnotInbask(product);
   product.quantity++;
  }

  removeIf0(product:Product):void{
    if(product.quantity==0)
    {
    let index=this.basket.indexOf(product);
    this.basket.splice(index,1);

    }

  }
  addIfnotInbask(product:Product):void{
    if(!this.basket.includes(product)&&product.quantity >-1)
    {
      this.basket.push(product);
      
      
    }
   
  }
  updateBasket(product:Product):void{
    this.removeIf0(product)
  this.addIfnotInbask(product);

  }


  getUrl():string{
    return "assets/bg-3.jpg";
  }

  addOrder():void{
    let order:Order={
      count:this.basket.length,
      cost:this.getTotal(),
      orderInfo:this.basket
      
    }
    this.shopService.orders.push(order);
   for(let p of this.basket)
    {
       p.quantity=0;
   }
   this.basket.length=0;


  }

}

