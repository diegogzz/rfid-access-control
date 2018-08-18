import { LineSale } from "./line-sale.model";

export class Sale{
    id:string;
    date:Date;
    total:number;
    lines:Array<LineSale>;
}
