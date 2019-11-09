import { Component,OnInit,ElementRef,ViewChild } from '@angular/core';
import {JsonService} from "./services/init/json.service";
import { MatDialog,MatDialogRef } from '@angular/material';
import {FavoritesComponent} from './component/favorites/favorites.component';
import {Marcador} from './clases/marcador.class';
import { AgmCoreModule } from '@agm/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mi-aguila-test';
  lat = 4.60971;
  lng = -74.08175;
  public orn: any;
  public dtn: any;
  private direction:any;
  private showRoute = true;
  private marcador:Marcador [] = [];
  @ViewChild('alert', { static: false }) alert: ElementRef;
  private showAlert = false;
  private showMarket = true;
  constructor(private json:JsonService,private  dialog:MatDialog
              ){

              }

  ngOnInit(){

    this.getInitDirection();
  }

  getInitDirection() {
    this.json.loadJson().then((resolve)=>{
      this.direction = resolve;
        const origen = new Marcador (Number(this.direction.point[0].lat),Number(this.direction.point[0].lng));
        const destino = new Marcador (Number(this.direction.point[1].lat),Number(this.direction.point[1].lng));
        this.marcador.push(origen);
        this.marcador.push(destino);
        this.orn = { lat:Number(this.direction.point[0].lat), lng:Number(this.direction.point[0].lng)};
        this.dtn = { lat:Number(this.direction.point[1].lat), lng:Number(this.direction.point[1].lng)};

    });
  }

  show(){

    if(this.marcador.length<=2){
      if(this.orn==null){
        this.orn = {lat:this.marcador[0].lat,lng:this.marcador[0].lng};
      }else{
        this.dtn = {lat:this.marcador[1].lat,lng:this.marcador[1].lng};
      }
      this.showRoute = true;
    }else{
      this.showAlert=true;
      this.showMarket=false;
    }

  }

  getLocation(event){

      const nuevoM = new Marcador (Number(event.coords.lat),Number(event.coords.lng));
      this.marcador.push(nuevoM);
      this.show();

  }

  removeRoute(){
    this.showRoute = false;
    this.dtn = null;
    this.orn = null;
    this.marcador = [];
    this.showAlert=false;
    this.showMarket=true;
  }



  openFavorites():void{
    if(this.dialog.openDialogs.length==0){
      const dialogRef = this.dialog.open(FavoritesComponent, {
        height: '400px',
        width: '400px'
      });
      dialogRef.afterClosed().subscribe(result => {
      const nuevoM = new Marcador (Number(result.lat),Number(result.lng));
      this.marcador.push(nuevoM);
      this.show();
      if(!result){
        return;
      }

    });
      };

   }

   closeAlert() {
        this.alert.nativeElement.classList.remove('show');
        this.removeRoute();
   }

}
