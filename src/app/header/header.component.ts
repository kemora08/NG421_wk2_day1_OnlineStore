import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-detail/product-service';
import { IProduct } from '../model/iproduct';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  shoppingcart: IProduct[] = [];
  shoppingCart: IProduct[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.shoppingCart = [];
    this.shoppingCart = this.productService.getShoppingCart();
  }

}
