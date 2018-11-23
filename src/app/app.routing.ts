import {NgModule} from '@angular/core'
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';


const routes: Routes = [
  {path: 'tasks', loadChildren: 'app/tasks/tasks.module#TasksModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouting {}