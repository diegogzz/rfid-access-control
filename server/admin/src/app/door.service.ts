import { DoorAC } from './models/door_ac.model';
import { StocksComponent } from './modules/stock/stocks/stocks.component';
import { Products } from './models/products.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Sale } from './models/sale.model';
import { Stock } from './models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class DoorService {
 apiUrl: any = function(){
    return  `http://localhost:3000/api/`;
 }

  extractData(res: Response) {
  return res.json();
}


handleError(error: Response | any) {
  return Observable.throw(error);
}


constructor(private http: Http) { }

    public getProducts():Observable<Array<Products>>  
    {
        return this.http.get(this.apiUrl() +'global/products')
        .map(res=>{
          return res.json();
        })
    }
    public getSales():Observable<Array<Sale>>  
    {
        return this.http.get(this.apiUrl() +'global/sale')
        .map(res=>{
          return res.json();
        })
    }

    public getStocks():Observable<Array<Stock>>  
    {
        return this.http.get(this.apiUrl() +'global/stock')
        .map(res=>{
          return res.json();
        })
    } 
    public addStocks(data:Stock):Observable<Stock>  
    {
        return this.http.post(this.apiUrl() +'global/stock',data)
        .map(res=>{
          return res.json();
        })
    } 
    public addSale(data:Sale):Observable<Sale>  
    {
        return this.http.post(this.apiUrl() +'global/sale',data)
        .map(res=>{
          return res.json();
        })
    } 
    public getDoor():Observable<Array<DoorAC>>  
    {
        return this.http.get(this.apiUrl() +'global/nfc')
        .map(res=>{
          return res.json();
        })
    } 
}
