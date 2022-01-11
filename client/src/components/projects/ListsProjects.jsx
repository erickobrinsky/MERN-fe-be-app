import React, {useContext, useEffect} from 'react'
import Project from './Project'
import projectContext from '../../context/projects/projectContext'
import AlertContext from '../../context/alerts/alertContext'


export default function ListsProjects() {


    //get projects from state initial
    const projectsContext = useContext(projectContext)
    const {message,projects, getProjects} = projectsContext

    const alertContext = useContext(AlertContext)
    const { alert, showAlert} = alertContext

    //get projects when component is refreshing
    useEffect(() => {

        if(message){
            showAlert(message.msg, message.category)
        }

        getProjects()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message])
   
    //check is projects are empty
    if(projects.length === 0) return <p>No projects, start adding a new one</p>



    
    return (
        <ul className="listado-proyectos">
            {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>): null}
                {projects.map(project =>(
                    <Project
                        key={project._id}
                        project={project}
                    />
                ))}
        </ul>
    )
}
