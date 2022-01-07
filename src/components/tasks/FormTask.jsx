import React, {useContext, useState, useEffect} from 'react'
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'


export default function FormTask() {

    const projectsContext = useContext(projectContext)
    const {project} = projectsContext

    const tasksContext = useContext(taskContext) 
    const {taskselected, errorTask, addTask, validTask, getTasks,updateTask, cleanTask} = tasksContext
    
    //effect to detect if there is a taskselected
    useEffect(() => {
        if(taskselected !== null){
            setTask(taskselected)
        }else{
            setTask({
                name: ''
            })
        }
    }, [taskselected])

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

        //if is edit or a new task
        if(taskselected === null){
            //new task
        
            //add new task to the state of tasks
  
        task.projectId = currentProject.id
        task.state = false
        addTask(task)
        }else{
            //update existing task
            updateTask(task)
            //delete task selected of the state
            cleanTask()
        }

        

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
                value= {taskselected ? 'Edit task': 'Add task'}
                
                />    
            
            </div>
        </form>
        {errorTask ? <p className="mensaje error">Name of task is mandatory</p> : null}
        </div>
    )
}
