import { Component, OnInit } from '@angular/core';
import { Task } from '../models/tasks.interface';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {

  toDoTask: Task = {
    taskName: null,
    userName: null,
    taskDetails: null,
    isCompleted: null
  };

  constructor(private _tasksService: TasksService, private _router: Router) {
  }

  ngOnInit() {

  }

  saveToDoTask(): void {
    this._tasksService.saveTask(this.toDoTask);
    if (this.toDoTask.isCompleted) {
      this.changeCompletedTasks();
    }
    else {
      this._tasksService.stateTasksChange("total");
    }
    this._router.navigate(['/tasks'])
  }

  changeCompletedTasks() {
    this._tasksService.incrementCompletedTasksCount();
    this._tasksService.stateTasksChange("total and completed");
  }


}
