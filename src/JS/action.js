import {
    ADD_TASK,
    DELETE_TASK,
    DONE_TASK,
    EDIT_TASK,
} from './actionType'
//action for add task
export const addTask = (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask,
    }
}
//action for delete task
export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id,
    }
}
//action for done task
export const doneTask = (id) => {
    return {
        type: DONE_TASK,
        payload: id,
    }
}
//action for edit task
export const editTask = (id, newCaption) => {
    return {
        type: EDIT_TASK,
        payload: { id, newCaption },
    }
}
