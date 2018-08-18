import { DoorService } from './../../../door.service';
import { Stock } from './../../../models/stock.model';
import { Products } from './../../../models/products.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  products:Array<Products> /*= [
    { id:"1", name: "producto A", prize: 3, codeNFC:"1"},
    { id:"2", name: "Producto B", prize: 4, codeNFC:"2"},
    { id:"3", name: "Producto C", prize: 5, codeNFC:"3"},
    { id:"4", name: "Producto D", prize: 6, codeNFC:"4"},
    { id:"5", name: "Producto E", prize: 7, codeNFC:"5"}
  ]*/
  newStock:Stock;
  stocks: Array<Stock>;
  isCreate:boolean;

  constructor(private doorService:DoorService) { }

  ngOnInit() {
    this.isCreate=true;
    this.stocks= new Array<Stock>();
    this.refresh();
    
  }
  refresh(){
    this.newStock= new Stock();
    this.newStock.date=new Date(Date.now());
    this.newStock.quantity=0;
    this.getProducts();
    this.getStoks();
  }
  selectStock(stock:Stock){
    this.isCreate=false;
    this.newStock=stock;
  }
  addStock(){
    if(this.isCreate){
      //this.stocks.push(this.newStock);
      this.doorService.addStocks(this.newStock).subscribe(
        data=>{
          this.refresh();
        }, error=>{
          console.log(error)
        }
      );
    }else{
      this.refresh();
    }
  }
  getProducts()
  {
    this.doorService.getProducts().subscribe(
      data=>{
        this.products=data;
      }, error=>{
        console.log(error)
      }
    );
  }
  getStoks()
  {
    this.doorService.getStocks().subscribe(
      data=>{
        this.stocks=data;
      }, error=>{
        console.log(error)
      }
    );
  }

}
