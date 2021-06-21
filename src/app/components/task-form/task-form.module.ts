import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskFormComponent } from './task-form.component';

@NgModule({
  declarations:  [TaskFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ TaskFormComponent ],
  providers: [],
})
export class TaskFormModule { }
