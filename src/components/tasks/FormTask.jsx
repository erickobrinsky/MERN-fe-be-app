import React, {useContext} from 'react'
import projectContext from '../../context/projects/projectContext'


export default function FormTask() {

    const projectsContext = useContext(projectContext)
    const {project} = projectsContext

    if(!project) return null

    const [currentProject] = project

    return (
        <div className="formulario">
        <form action="">

            <div className="input-text">
                <input 
                type="text"
                className="input-text"
                placeholder="Name task..."
                name="nameTask"
                />
            </div>
            <div className="input-text">
                <input type="submit"
                className="btn btn-primario btn-submit btn-block"
                value="Add Task"/>    
            
            </div>
        </form>

        </div>
    )
}
