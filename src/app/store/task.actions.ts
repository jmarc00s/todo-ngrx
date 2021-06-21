import { createAction, props } from "@ngrx/store";
import { TaskModel } from "../models/task.model";

export const addTask = createAction('Add task', props<{task: TaskModel}>());
export const removeTask = createAction('Remove task', props<{id: string}>());
export const toggleTaskDone = createAction('Toggle task done', props<{id: string}>());
