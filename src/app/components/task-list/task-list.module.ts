import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { TaskCardModule } from './components/task-card/task-card.module';

@NgModule({
  declarations: [ TaskListComponent ],
  imports: [
    CommonModule,
    TaskCardModule
  ],
  exports: [ TaskListComponent ],
})
export class TaskListModule {}
