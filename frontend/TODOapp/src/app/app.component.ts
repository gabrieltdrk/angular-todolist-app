import { Component } from '@angular/core';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TODOapp';

  arrayTasks: Task[] = [];
  apiURL: string;

  constructor(private http: HttpClient) {
    this.apiURL = 'https://angular-branqs-api.vercel.app/';
    this.READ_tasks();
  }

  CREATE_task(_description: string) {
    const descriptionTask = new Task(_description, false);
    this.http
      .post<Task>(`${this.apiURL}/api/post`, descriptionTask)
      .subscribe((result) => {
        console.log(result);
        this.READ_tasks();
      });
    _description = '';
  }

  READ_tasks() {
    this.http
      .get<Task[]>(`${this.apiURL}/api/getAll`)
      .subscribe((result) => (this.arrayTasks = result));
  }

  UPDATE_task(_task: Task) {
    var index = this.arrayTasks.indexOf(_task);
    var id = this.arrayTasks[index]._id;
    this.http
      .patch<Task>(`${this.apiURL}/api/update/${id}`, _task)
      .subscribe((result) => {
        console.log(result);
        this.READ_tasks();
      });
  }

  DELETE_task(_task: Task) {
    var index = this.arrayTasks.indexOf(_task);
    var id = this.arrayTasks[index]._id;
    this.http
      .delete<Task>(`${this.apiURL}/api/delete/${id}`)
      .subscribe((result) => {
        console.log(result);
        this.READ_tasks();
      });

    // const taskToDelete = this.arrayTasks.indexOf(_task);
    // if (taskToDelete > -1) {
    //   this.arrayTasks.splice(taskToDelete, 1);
    // }
  }
}
