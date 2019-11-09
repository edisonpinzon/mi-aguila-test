import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { FavoritesComponent } from './component/favorites/favorites.component';
import { AgmDirectionModule } from 'agm-direction';


//services
import {JsonService} from './services/init/json.service';
import {FavoritesService} from './services/favorites/favorites.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FavoritesComponent
  ],

  entryComponents:[
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AgmDirectionModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDhfQ3Z61a6j0lms8GkHc9YIHO8wJvfNrw'
    })
  ],
  providers: [
    JsonService,
    FavoritesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
