import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class GithubService {


  constructor(private _http: HttpClient) { }

  private base = 'https://api.github.com/users/';

  getUser(name): Observable<object> {
    return this._http.get<object>(this.base + name);

  }

  errorHandler(error: HttpErrorResponse) {

  }

}
