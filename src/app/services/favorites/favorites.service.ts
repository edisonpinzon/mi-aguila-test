import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http:Http) { }

  loadFavorites(){
    return new Promise((resolve, reject) => {
      let localData = this.http.get("/assets/json/favorites.json").subscribe(res => {
         resolve(res.json());

       }, (err) => {
         reject(err);
       });
     });
   }
}
