import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as tasks from './store/task.reducer';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskListModule } from './components/task-list/task-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    StoreModule.forRoot({state: tasks.reducer }),
    TaskListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
