import { createReducer, on, Action } from "@ngrx/store";
import { TaskModel } from "../models/task.model";
import { State } from "./state";
import * as taskActions from './task.actions';

export const initialState: State = {
  tasks: []
}

export const tasksReducer = createReducer(
  initialState,
  on(taskActions.addTask, (state, { task }) => ({ tasks: [...state.tasks, task] })),
  on(taskActions.removeTask, (state, { id }) => ({ tasks: state.tasks.filter(task => task.id !== id) })),
  on(taskActions.toggleTaskDone, (state, { id }) => {
    const tasks = state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done
        } as TaskModel
      }
      return task
    });
    return {
      tasks: tasks
    }
  })
)

export function reducer(state: State | undefined, action: Action) {
  return tasksReducer(state, action)
}
