import { Component, OnInit } from '@angular/core';
import {ActivatedRoute  } from "@angular/router";
import { Product,ShopService } from "../shop.service";
import {  items  } from "../products";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  relatedProducts:Product[]=[];
   productId!:string;
   product?:Product;
   addedProduct?:Product;
  constructor(private route:ActivatedRoute) {}
   
  ngOnInit():void {
    this.route.paramMap.subscribe(paramMap=>{
      this.productId=paramMap.get("productId") as string;

    this.product=items.find(p=>p.id == this.productId);
    this.relatedProducts=items.filter(p=>this.product?.related.includes(p.id));
  
  
  
  }  )
   
  }
  showMessage(product:Product):void
  {
  this.addedProduct=product;
  setTimeout(() => {
    this.addedProduct=undefined;
  }, 2000);
  }

}
