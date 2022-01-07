import React, {useContext, useState} from 'react'
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'


export default function FormTask() {

    const projectsContext = useContext(projectContext)
    const {project} = projectsContext

    const tasksContext = useContext(taskContext) 
    const {errorTask, addTask, validTask, getTasks} = tasksContext
  

    const [task, setTask] = useState({
        name: ''
    })

    //extract name of the project
    const {name} = task

    if(!project) return null

    const [currentProject] = project

    //read values from form
    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name] : e.target.value
        })
        
    }

    const onSubmit = e =>{
        e.preventDefault()

        //valid (trim help to delete spaces when users write with spaces)
        if(name.trim() === ''){
            validTask()
            return
        }
        //pass validation

        //add new task to the state of tasks
  
        task.projectId = currentProject.id
        task.state = false
        addTask(task)

        //get and filter tasks
        getTasks(currentProject.id)

        //restart form
        setTask({
            name:''
        })
    
    }

    return (
        <div className="formulario">
        <form
            onSubmit={onSubmit}
        >

            <div className="input-text">
                <input 
                type="text"
                className="input-text"
                placeholder="Name task..."
                name="name"
                value={name}
                onChange={handleChange}
                />
            </div>
            <div className="input-text">
                <input type="submit"
                className="btn btn-primario btn-submit btn-block"
                value="Add Task"/>    
            
            </div>
        </form>
        {errorTask ? <p className="mensaje error">Name of task is mandatory</p> : null}
        </div>
    )
}
