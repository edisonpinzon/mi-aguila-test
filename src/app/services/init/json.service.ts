import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  data:any;
  constructor(private http:Http) { }


  loadJson(){
    return new Promise((resolve, reject) => {
      let localData = this.http.get("/assets/json/travel.json").subscribe(res => {
         resolve(res.json());
          
       }, (err) => {
         reject(err);
       });
     });
   }
}
