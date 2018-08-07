import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private base = '/api/bikes';

  constructor(private http: HttpClient) { }

  // create bike

  // show bikes

  // show my bikes

  // update bike

  // delete bike

  // search bikes

}
