import  {TASKS_PROJECT, ADD_TASK, VALID_TASK, DELETE_TASK, CURRENT_TASK, UPDATE_TASK, CLEAN_TASK} from '../../types'

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
            case TASKS_PROJECT:
                return{
                    ...state,
                    tasksproject: action.payload  //state.tasksproject.filter(task => task.projectId === action.payload),
                  
                }
            case ADD_TASK:
                return{
                    ...state,
                    tasksproject : [action.payload, ...state.tasksproject],
                    errorTask: false
                }    
            case VALID_TASK:
                return{
                    
                    ...state,
                    errorTask: true
                }
            case DELETE_TASK:
                return{
                    ...state,
                    tasksproject: state.tasksproject.filter(task => task._id !== action.payload)
                }
            case UPDATE_TASK:            
            // case STATE_TASK:
                return{
                    ...state,
                    tasksproject: state.tasksproject.map(task => task._id === action.payload._id ? action.payload : task)
                }
            case CURRENT_TASK:
                return{
                    ...state,
                    taskselected: action.payload    
                }
            case CLEAN_TASK:
                return{
                    ...state,
                    taskselected: null
                } 
            

        default:
            return state
    }
}