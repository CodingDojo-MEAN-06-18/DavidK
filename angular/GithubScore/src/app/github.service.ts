import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class GithubService {
  constructor(private _http: HttpClient) { }
  getUser = function (username) {
    return this._http.get(`https://api.github.com/users/${username}`);
  };
}
