import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { NavController } from 'ionic-angular';
 
declare var google;
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
 
  }
 
  loadMap(){
 	  let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  }

  geolocate() {
    let options = {
      enableHighAccuracy: true
    };
    
      this.geolocation.getCurrentPosition(options).then((position: Geoposition) => {
      console.log(position)
    }).catch((err) => {
      alert(err);
    })
    
  }
 
  ionViewDidEnter(){
 	
    this.loadMap();
  }
}
