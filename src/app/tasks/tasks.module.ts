import {NgModule} from '@angular/core';
import {ListTasksComponent } from './tasks-list/tasks-list..component';
import {AddTaskComponent} from './add-task/add-task.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {TasksService} from './tasks.service'
import {CommonModule } from '@angular/common';

export const routes: Routes = [
    { path: '', component: ListTasksComponent },
    { path: 'add', component: AddTaskComponent},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule
      ],
    declarations:[
        ListTasksComponent,
        AddTaskComponent,       
    ],

    providers:[TasksService],

})

export class TasksModule { }
