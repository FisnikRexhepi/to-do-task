import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../models/tasks.interface';

@Component({
  selector: 'app-navbar-above',
  templateUrl: './navbar-above.component.html',
  styleUrls: ['./navbar-above.component.scss'],
  providers: [TasksService]
})
export class NavbarAboveComponent{

  @Input('totalTasks') totalTasks;
  @Input('completedTasks') completedTasks;

  constructor(private _tasksService: TasksService) {
   }

  

}
