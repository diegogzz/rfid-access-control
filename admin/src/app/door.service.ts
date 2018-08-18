import { Products } from './models/products.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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

    public getProducts():Observable<Products>  
    {
        return this.http.get(this.apiUrl() +'global/products')
        .map(res=>{
          return res.json();
        })
    }
}
