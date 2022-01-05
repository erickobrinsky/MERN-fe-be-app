import React, {useContext} from 'react'
import projectContext from '../../context/projects/projectContext'



export default function Project({project}) {

  //get state of projects
  const projectsContext = useContext(projectContext)
  const {currentProject} = projectsContext

    return (
      <li>
          <button
          type="button"
          className="btn btn-blank"
          onClick={()=> currentProject(project.id)}
          >

          {project.name}</button>
      </li>
    )
}
