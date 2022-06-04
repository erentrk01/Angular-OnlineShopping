import { NgModule } from "@angular/core";
import {  RouterModule,Routes} from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductsComponent } from "./products/products.component";
import {OrdersComponent  } from "./orders/orders.component";
const routes:Routes=[{path:"products",component:ProductsComponent},
{path:"orders",component:OrdersComponent},
{path:'', redirectTo:'products', pathMatch:'full'},
{path:'products/:productId',component:ProductDetailComponent}
];
@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModule{}