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
 	  let options = {
      enableHighAccuracy: true
    };
    
    this.geolocation.getCurrentPosition(options).then((position: Geoposition) => {
      let latLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude)
      

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
   
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      console.log(this.map.setCenter(latLng))
      //this.map.center()
    }).catch((err) => {
      alert(err);
    })
    
  }

  geolocate() {
    let options = {
      enableHighAccuracy: true
    };
    
      this.geolocation.getCurrentPosition(options).then((position: Geoposition) => {
      console.log('lat: ' + position.coords.latitude + ', lon: ' + position.coords.longitude)
      let latLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude)
      
      console.log(this.map.setCenter(latLng))
      //this.map.center()
    }).catch((err) => {
      alert(err);
    })
    
  }
 
  ionViewDidEnter(){
 	
    this.loadMap();
  }
}
