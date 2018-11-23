import { Component, Input, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Route } from '@angular/compiler/src/core';
import { TasksService } from './tasks/tasks.service';
import { Task } from './tasks/models/tasks.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TasksService]
})
export class AppComponent {
  title = 'app';

  totalTasks = 0;
  completedTasks = 0;

  constructor(private router: Router, private _tasksService: TasksService) {
    _tasksService.stateTaskChanged$.subscribe(
      stateChange => {
        if(stateChange =="total and completed")
        {
          this.totalTasks = this._tasksService.totalTasks;
          this.completedTasks = this._tasksService.completedTasks;
        }
        else if (stateChange == "total")
        {
          this.totalTasks = this._tasksService.totalTasks;
        }
        else if(stateChange = "completed")
        {
          this.completedTasks = this._tasksService.completedTasks;
        }
      }
    )
  }

  ngOnInit() {
    var currentRoute = window.location.pathname;
    if (currentRoute == "/")
      this.router.navigate(['/tasks']);


  }


}


