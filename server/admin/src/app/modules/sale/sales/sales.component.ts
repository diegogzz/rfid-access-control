import { DoorService } from './../../../door.service';
import { Products } from './../../../models/products.model';
import { Sale } from './../../../models/sale.model';
import { Component, OnInit } from '@angular/core';
import { LineSale } from '../../../models/line-sale.model';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales:Array<Sale>

  newSale:Sale;
  newLine:LineSale;
  products:Array<Products>;

  /*products:Array<Products> = [
    { id:"1", name: "producto A", prize: 3, codeNFC:"1"},
    { id:"2", name: "Producto B", prize: 4, codeNFC:"2"},
    { id:"3", name: "Producto C", prize: 5, codeNFC:"3"},
    { id:"4", name: "Producto D", prize: 6, codeNFC:"4"},
    { id:"5", name: "Producto E", prize: 7, codeNFC:"5"}
  ]*/

  constructor(private doorService:DoorService) { }

  ngOnInit() {
    this.sales= new Array<Sale>();
    this.refresh();
  
  }
  refresh(){
    this.newSale= new Sale();
    this.newSale.date = new Date(Date.now());
    this.newLine= new LineSale();
    this.newSale.total=0;
    this.getProducts();
    this.getSales();
   }
  addLine()
  {
    if(!this.newSale.lines)
      this.newSale.lines = new Array<LineSale>();

    this.newSale.lines.push(this.newLine);

    this.newSale.lines.map(line=>{
      this.newSale.total+=line.product.prize*line.quantity;
    })

    this.newLine= new LineSale();


  }
  addSale(){
    if(!this.sales)
      this.sales= new Array<Sale>();
    this.sales.push(this.newSale);
    this.doorService.addSale(this.newSale).subscribe(
      data=> {
        this.refresh();
      }, 
      error =>{
        console.log(error)
      }
    ); 
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
  getSales()
  {
    this.doorService.getSales().subscribe(
      data=>{
        this.sales=data;
      }, error=>{
        console.log(error)
      }
    );
  }

}
