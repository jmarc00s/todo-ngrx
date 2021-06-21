import { map } from 'rxjs/operators';
import { selectTasks } from './../../store/task.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TaskModel } from 'src/app/models/task.model';
import { State } from 'src/app/store/state';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks$!: Observable<TaskModel[]>;

  constructor(
    private _store: Store<{state: State}>
  ) { }

  ngOnInit(): void {
    this.tasks$ = this._store.select('state').pipe(map(state => state.tasks));
  }

}
