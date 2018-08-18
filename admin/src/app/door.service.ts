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
    return  `http://${window.location.host}/api/`;
 }


constructor(private http: Http) { }

}
