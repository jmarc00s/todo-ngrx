import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { TaskModel } from './models/task.model';
import { State } from './store/state';
import { addTask } from './store/task.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'taskapp-ngrx';

  tasks$: Observable<TaskModel[]> | undefined;
  formGroup!: FormGroup;


  constructor(
    private _store: Store<{state: State}>,
    private _formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.tasks$ = this._store.select('state').pipe(map((state: State) => state.tasks));
    this._createForm();
  }

  addTask(event: MouseEvent): void {

    event.preventDefault();

    const formValue = this.formGroup.getRawValue();

    const task: TaskModel = {
      id: this._createId(),
      description: formValue.description,
      done: false
    }
    this._store.dispatch(addTask({ task }));
    this.formGroup.reset();
  }


  private _createId(): string {
    return Number(Math.random() * 1000).toFixed(0);
  }

  private _createForm(): void {
    this.formGroup = this._formBuilder.group({
      description: [null, Validators.required]
    });
  }
}
