import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bike } from './bike';


@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private base = '/api/bikes';

  constructor(private http: HttpClient) { }

  // create bike
  createBike(bike: Bike): Observable<Bike> {
    console.log('creating a bike', bike);
    return this.http.post<Bike>(this.base, bike);
  }

  // show all bikes
  getBikes(): Observable<Bike[]> {
    console.log('getting all bikes');
    return this.http.get<Bike[]>(this.base);
  }

  // show my bikes
  getmyBike(id: string): Observable<Bike> {
    console.log('getting my bikes');
    return this.http.get<Bike>(`${this.base}/${id}`);
  }

  // update bike
  updateBike(bike: Bike): Observable<Bike> {
    console.log('updating a bike');
    return this.http.put<Bike>(`${this.base}/${bike._id}`, bike);
  }

  // delete bike
  deleteBike(bike: Bike): Observable<Bike> {
    console.log('deleting a bike');
    return this.http.delete<Bike>(`${this.base}/${bike._id}`);
  }


}
