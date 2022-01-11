import React, {useContext} from 'react'
import taskContext from '../../context/tasks/taskContext'
import projectContext from '../../context/projects/projectContext'



export default function Task({task}) {

    const projectsContext = useContext(projectContext)
    const {project} = projectsContext

    const tasksContext = useContext(taskContext) 
    const {deleteTask, getTasks, updateTask, setCurrentTask} = tasksContext
  
    //extract projec
    const [currentProject] = project

    //function that is executed when user clicked on delete task button
    const taskDelete = id => {
        deleteTask(id, currentProject._id )
        getTasks(currentProject.id)
    }

    //function to modify state
    const changeState = task => {
        if(task.state){
            task.state = false
        } else {
            task.state = true
        }
        // changeStateTask(task) 
        updateTask(task)  
    }

    //add current task when user wish to edit
    const selectTask = task => {
        setCurrentTask(task)
    }


    return (
             <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.state 
                ?
                    (<button
                        type="button"
                        className="completo"
                        onClick={()=>changeState(task)}
                    >Complete</button>)
                :    
                (<button
                    type="button"
                    className="incompleto"
                    onClick={()=>changeState(task)}
                >Uncomplete</button>)
            }
            </div>
            <div className="acciones">
                <button
                className="btn btn-primario"
                type="button"
                onClick={()=>selectTask(task)}
                >Edit</button>

                <button
                  className="btn btn-secundario"
                  type="button"
                  onClick={()=> taskDelete(task._id)}
                >
                    Delete 
                </button>

            </div>
        </li>

    )
}
