import React, {Fragment, useContext} from 'react'
import Task from './Task'
import projectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/tasks/taskContext'


export default function TasksList() {

    const projectsContext = useContext(projectContext)
    const {project, deleteProject} = projectsContext

    const tasksContext = useContext(TaskContext) 
    const {tasksproject} = tasksContext


    //if no project selected
    if(!project) return <h2>Select project</h2>

    //array destructuring to extract current porject
    const [currentProject] = project
    

   
    //delete project
    const onClickDelete = () =>{
        deleteProject(currentProject._id)
    }


    return (
        <Fragment>
       <h2>Project: {currentProject.name}</h2>
       <ul className="listado-tareas">
        {tasksproject.length === 0
            ?
            (<li className="tarea"><p>No taks</p></li>)

            :
            tasksproject.map(task => (
                <Task
                task={task}
                />
            ))
        }

       </ul>
       <button 
       type="button"
       className="btn btn-eliminar"
       onClick={onClickDelete}
       >
           Delete Project &times;
       </button>
       </Fragment>
    )
}
