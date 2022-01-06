import React, {useContext} from 'react'
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'


export default function Project({project}) {

  //get state of projects
  const projectsContext = useContext(projectContext)
  const {currentProject} = projectsContext

  //get function context
  const tasksContext = useContext(taskContext) 
  const {getTasks} = tasksContext


  //function to add current project
  const selectProject = id => {
    currentProject(id) //pin current project
    getTasks(id) //filter tasks when user clicked
  }

    return (
      <li>
          <button
          type="button"
          className="btn btn-blank"
          onClick={()=> selectProject(project.id)}
          >

          {project.name}</button>
      </li>
    )
}
