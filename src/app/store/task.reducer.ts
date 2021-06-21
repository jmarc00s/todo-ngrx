import { createReducer, on, Action } from "@ngrx/store";
import { TaskModel } from "../models/task.model";
import { State } from "./state";
import * as taskActions from './task.actions';

export const initialState: State = {
  tasks: []
}

export const tasksReducer = createReducer(
  initialState,
  on(taskActions.addTask, (state, { task }) => ({ tasks: [...state.tasks, task ]})),
  on(taskActions.removeTask, (state, {id}) => ({ tasks: state.tasks.filter(task => task.id !== id)})),
  on(taskActions.toggleTaskDone, (state, {id}) => {
    const task = state.tasks.find(task => task.id === id);

    if(!task ){
      return {
        tasks: [...state.tasks]
      }
    }

    const taskDone = {...task, done: !task.done};

    return {
      tasks: [...state.tasks, taskDone]
    }
  })
)

export function reducer(state: State | undefined, action: Action){
  return tasksReducer(state, action)
}
