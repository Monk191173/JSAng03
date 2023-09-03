import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TableComponent } from './TaskList/table/table.component';

@NgModule({
   declarations: [
    // AppComponent,
    TaskListComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TaskListComponent]
})
export class AppModule { }
