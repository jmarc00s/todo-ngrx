import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskModel } from 'src/app/models/task.model';
import { State } from 'src/app/store/state';
import { toggleTaskDone } from 'src/app/store/task.actions';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task!: TaskModel;


  get taskStatus(): string {
    return this.task.done ? 'Realizada': 'Não realizada';
  }

  constructor(
    private _store: Store<{state: State}>
  ) { }

  ngOnInit(): void { }

  toggleTaskDone(): void {
    this._store.dispatch(toggleTaskDone({ id: this.task.id }));
  }
}
