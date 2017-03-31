import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Parking } from '../models/parking';

import 'rxjs/add/operator/map';

/*
  Generated class for the ParkingService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ParkingService {
	private parkings: Array<Parking>;
  
  constructor(public http: Http) {
    console.log('Hello ParkingService Provider');
  }

}
