import React, {useContext, useEffect} from 'react'
import Project from './Project'
import projectContext from '../../context/projects/projectContext'



export default function ListsProjects() {


    //get projects from state initial
    const projectsContext = useContext(projectContext)
    const {projects, getProjects} = projectsContext

    //get projects when component is refreshing
    useEffect(() => {
        getProjects()
    }, [])
    
    //check is projects are empty
    if(projects.length === 0) return null

   

    
    return (
        <ul className="listado-proyectos">
                {projects.map(project =>(
                    <Project
                        key={project.id}
                        project={project}
                    />
                ))}
        </ul>
    )
}
