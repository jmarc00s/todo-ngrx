import { State } from './state';
import { createSelector } from "@ngrx/store";
import { TaskModel } from '../models/task.model';

export const selectTasks = (state: State) => state.tasks;
