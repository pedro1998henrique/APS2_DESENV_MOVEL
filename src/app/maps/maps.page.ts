import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var google: any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor() {}

  ionViewDidEnter() {
    
  }

  shownMap(){
const location = new google.maps.LatLng(-17.824858, 31.053028);
const options = {
  center: location,
  zoom: 15,
  disableDefaultUI: true
};
this.map = new google.maps.Map(document.getElementById('mapDiv'), options);
  }
  ngOnInit() {
    this.shownMap();
  }

}
