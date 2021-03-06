import { Component } from '@angular/core';
import { IProduct } from './model/iproduct';
import { ProductService } from './product-detail/product-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private productService: ProductService,) {}

  ngOnInit(): void{}
   this.product = this.productService.getProducts();
}

productwasAdded(product: IProduct): void {
  this.productService.addtoCart(product);
}
