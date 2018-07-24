import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Weather } from './weather';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  getWeather(location: string) {
    const apiKey = '999340f13c485a064c1fdf739c0219fd';
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&&appid=${apiKey}`).pipe(map(data => {
      console.log(data);
      const { temp,  temp_max: tempMax, temp_min: tempMin } = (data as any).main;
      console.log(temp,  tempMax, tempMin);
      const { all: clouds } = (data as any).clouds;
      console.log(clouds);
      const { speed: wind } = (data as any).wind;
      console.log(wind);
      return new Weather(temp, tempMax, tempMin, clouds, wind);
    }));
  }



}
