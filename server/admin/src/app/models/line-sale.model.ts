import { Products } from "./products.model";

export class LineSale {
    id:string;
    productId:string;
    date: Date;
    quantity:number;
    product:Products;
}
