import { DoorAC } from './../../models/door_ac.model';
import { DoorService } from './../../door.service';
import { Component, OnInit } from '@angular/core';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'app-nfc',
  templateUrl: './nfc.component.html',
  styleUrls: ['./nfc.component.css']
})
export class NFCComponent implements OnInit {
  stocks: Array<Stock>;
  listDoors: Array<DoorAC>;

  constructor(private doorService:DoorService) { }

  ngOnInit() {
    this.getStoks();
    this.getRegisterDoor();
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
  getRegisterDoor(){
    this.doorService.getDoor().subscribe(
      data=>{
        this.listDoors=data;
      }, error=>{
        console.log(error)
      }
    );
  }
  searchRegisterByNFC(nfc:string){
    let count=0;
    this.listDoors.map(item =>{
      if(item.codeNFC.includes(nfc)){
        count++;
      }
    });
    return count;
  }

}
