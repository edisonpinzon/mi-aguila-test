import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FavoritesService} from "../../services/favorites/favorites.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  private favorites:any;
  constructor(
    public dialogRef: MatDialogRef<FavoritesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private favorite:FavoritesService
  ) {

    }

  ngOnInit() {
    this.favorite.loadFavorites().then((resolve)=>{
      this.favorites = resolve;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  selectItem(item:any){
   this.dialogRef.close(item);
  }

}
