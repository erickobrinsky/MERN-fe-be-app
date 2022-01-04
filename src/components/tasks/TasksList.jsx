import React, {Fragment} from 'react'
import Task from './Task'

export default function TasksList() {

    const tasksProject = [
        {name: 'Update my cv', state: true},
        {name: 'Search on LinkedIn', state: false}
    ]

    return (
        <Fragment>
       <h2>Project: Looking for a job</h2>
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
       <button to
       type="button"
       className="btn btn-eliminar"
       >
           Delete Project &times;
       </button>
       </Fragment>
    )
}
