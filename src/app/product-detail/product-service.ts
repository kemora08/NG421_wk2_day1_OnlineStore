import { IProduct } from '../model/iproduct';
import { products } from '../products';
import{ products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
shoppingcart: IProduct[] = [];
products: IProduct[] = [];

constructor() { 
  this.products = products
}

getProducts(): IProduct[] {
return this.products;
}

getShoppingCart(): IProduct[] {
return this.shoppingcart;
}

addToCart(product: IProduct): void {
  this.shoppingcart.push(product);
}

}