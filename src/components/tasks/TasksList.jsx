import React, {Fragment, useContext} from 'react'
import Task from './Task'
import projectContext from '../../context/projects/projectContext'

export default function TasksList() {

    const projectsContext = useContext(projectContext)
    const {project, deleteProject} = projectsContext

    //if no project selected
    if(!project) return <h2>Select project</h2>

    //array destructuring to extract current porject
    const [currentProject] = project
    
    const tasksProject = [
        {name: 'Update my cv', state: true},
        {name: 'Search on LinkedIn', state: false}
    ]
   
    //delete project
    const onClickDelete = () =>{
        deleteProject(currentProject.id)
    }


    return (
        <Fragment>
       <h2>Project: {currentProject.name}</h2>
       <ul className="listado-tareas">
        {tasksProject.lenght === 0
            ?
            (<li className="tarea"><p>No taks</p></li>)

            :
            tasksProject.map(task => (
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
