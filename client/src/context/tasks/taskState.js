import React, {useReducer} from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'
import  {TASKS_PROJECT, ADD_TASK, VALID_TASK, DELETE_TASK, CURRENT_TASK, UPDATE_TASK, CLEAN_TASK} from '../../types'
import clientAxios from '../../config/axios'

const TaskState = props => {

    const initialState = {
 
        tasksproject: [],
        errorTask: false,
        taskselected: null

    }

    //create dispatch and state
    const [state, dispatch] = useReducer(TaskReducer, initialState )

   


    //get tasks from projects
    const getTasks = async project => {
       try {
           const response = await clientAxios.get('/api/tasks', {params: {project}})
       
        dispatch({
            type: TASKS_PROJECT,
            payload: response.data.task
        })
       } catch (error) {
           console.log(error); 
       }
    }

    //add tasks
    const addTask = async task => {
        try {
            const response = await clientAxios.post('/api/tasks', task)
            console.log(response);
            dispatch({
                type: ADD_TASK,
                payload: task
            })
        } catch (error) {
            console.log(error);
        }
      
    }

    //valid and show an error when is neccesary
    const validTask = () => {
        dispatch({ 
            type: VALID_TASK
        })
    }

    const deleteTask =  async (id, project) => {
        try {
           await clientAxios.delete(`/api/tasks/${id}`, {params: {project}})
            dispatch({
                type: DELETE_TASK,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    // const changeStateTask = task => {
    //     dispatch({
    //         type: STATE_TASK,
    //         payload: task
    //     })
    // }

    //extract curretask to edit
    const setCurrentTask = task => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        })
    }

    //edit or modify task
    const updateTask = async task => {
        try {
            const response = await clientAxios.put(`/api/tasks/${task._id}`, task)
            console.log(response);
            dispatch({
                type: UPDATE_TASK,
                payload: response.data.task
            })
        } catch (error) {
            console.log(error);
        }
    }

    //delete task selected
    const cleanTask = () => {
        dispatch({
            type: CLEAN_TASK,   
        })
    }

    return(
        <TaskContext.Provider
        value={{
         
            tasksproject: state.tasksproject,
            errorTask: state.errorTask,
            taskselected: state.taskselected,
            getTasks,
            addTask,
            validTask,
            deleteTask, 
           
            setCurrentTask,
            updateTask,
            cleanTask
        }}

        
        
        >


            
            {props.children} 
        </TaskContext.Provider>
    )
}

export default TaskState


