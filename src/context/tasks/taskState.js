import React, {useReducer, useState, useContext} from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'
import  {TASKS_PROJECT, ADD_TASK, VALID_TASK, DELETE_TASK, STATE_TASK} from '../../types'


const TaskState = props => {

    const initialState = {
        tasks: [   {id:1 , name: 'Update my cv', state: true, projectId:1},
        {id:2 ,name: 'Search on LinkedIn', state: false, projectId:2}],
        tasksproject: null,
        errorTask: false

    }

    //create dispatch and state
    const [state, dispatch] = useReducer(TaskReducer, initialState )

   


    //get tasks from projects
    const getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }

    //add tasks
    const addTask = tasks => {
        dispatch({
            type: ADD_TASK,
            payload: tasks
        })
    }

    //valid and show an error when is neccesary
    const validTask = () => {
        dispatch({ 
            type: VALID_TASK
        })
    }

    const deleteTask = tasks => {
        dispatch({
            type: DELETE_TASK,
            payload: tasks
        })
    }

    const changeState = task => {
        dispatch({
            type: STATE_TASK,
            payload: task
        })
    }

    return(
        <TaskContext.Provider
        value={{
            tasks: state.tasks,
            tasksproject: state.tasksproject,
            errorTask: state.errorTask,
            getTasks,
            addTask,
            validTask,
            deleteTask, 
            changeState
        }}

        
        
        >


            
            {props.children} 
        </TaskContext.Provider>
    )
}

export default TaskState


