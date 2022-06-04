import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Product,ShopService } from 'src/app/shop.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  @Input()
  product!:Product;
  basket:Product[]=[];
  @Output()
  productAdded=new EventEmitter<Product>();
  constructor(private shopService:ShopService) { 
   
  }

  ngOnInit(): void { this.basket=this.shopService.basket;
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
   this.productAdded.emit(product);   
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


 

  

}
