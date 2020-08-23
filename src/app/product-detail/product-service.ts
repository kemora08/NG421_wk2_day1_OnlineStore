import { IProduct } from '../model/iproduct';
import { products} from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
shoppingcart: IProduct[] = [];
products: IProduct[] = [];

constructor() { }

}