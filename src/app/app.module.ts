import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { NavbarAboveComponent } from './tasks/navbar-above/navbar-above.component';
import { TasksService } from './tasks/tasks.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({

  imports: [
    BrowserModule,
    AppRouting,
    FormsModule
  ],

  declarations: [
    AppComponent,
    NavbarAboveComponent
  ],

  exports:[
    NavbarAboveComponent,
    FormsModule
  ],

  providers: [TasksService],
  bootstrap: [AppComponent],
})
export class AppModule { }

