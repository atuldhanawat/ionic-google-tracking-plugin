import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import{GeoTrack} from 'geotrack';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController,public platform: Platform) {
		platform.ready().then(() => {
		  this.initMap();
		});
  }
  
  initMap() { 
    GeoTrack.getGeoLocation(this.mapElement);
  }

}
