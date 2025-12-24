import { Product } from './model/entities/Product';
import { Sale } from './model/entities/Sale';

let product = Product.create('teste',10,1,'ativo', null);
let sale = Sale.create(product.id, 'process', null,100, new Date)
