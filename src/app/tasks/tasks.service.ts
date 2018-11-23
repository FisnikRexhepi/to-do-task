import { Injectable } from '@angular/core';
import { Task } from './models/tasks.interface';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TasksService {

    public totalTasks = 0;
    public completedTasks = 0;

    private stateTasksChangeSource = new Subject<string>();
    stateTaskChanged$ = this.stateTasksChangeSource.asObservable();


    private listTasks: Task[] = [

    ]

    saveTask(task: Task) {
        this.listTasks.push(task);
        this.totalTasks = this.listTasks.length;
    }

    incrementCompletedTasksCount() {
        this.completedTasks++;
    }

    decrementCompletedTasksCount()
    {
        this.completedTasks--;
    }

    getTasks(): Task[] {
        return this.listTasks;
    }

    stateTasksChange(stateChange: string) {
        this.stateTasksChangeSource.next(stateChange);
    }

}