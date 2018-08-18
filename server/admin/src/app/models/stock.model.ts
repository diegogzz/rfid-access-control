import { Products } from './products.model';
export class Stock{
    id:string;
    productId:string;
    date: Date;
    quantity:number;
    product:Products;
}
