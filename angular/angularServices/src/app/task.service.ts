import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) {
    this.retrieveTask();
  }

  retrieveTask() {
    this._http.get('https://5b513afdfe45ed0014cf09eb.mockapi.io/task').subscribe(
      (task: any[]) => { this.tasks.next(task); }
    );
  }

  addTask(newTask: any) {
    this._http.post('https://5b513afdfe45ed0014cf09eb.mockapi.io/task', newTask).subscribe(
      (response) => { this.retrieveTask(); }
    );
  }

}
