import { Product } from './model/entities/Product';

let product = Product.create('teste',10,1,'ativo', null);

console.log(product.id);