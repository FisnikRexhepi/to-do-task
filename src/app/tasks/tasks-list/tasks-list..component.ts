import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../models/tasks.interface';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class ListTasksComponent implements OnInit {
  constructor(private _tasksService: TasksService) { }

  tasks: Task[] = new Array<Task>();

  ngOnInit() {

    //Get All 
    this.tasks = this._tasksService.getTasks();

    

  }

  changeCompleted(value: boolean)
  {
    console.log(value);
    if(value)
    {
      this._tasksService.incrementCompletedTasksCount();
    }
    else
    {
      this._tasksService.decrementCompletedTasksCount();
    }
    this._tasksService.stateTasksChange("completed");
  }
}
