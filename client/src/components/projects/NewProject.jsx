import React, {Fragment, useState, useContext} from 'react'
import projectContext from '../../context/projects/projectContext'

export default function NewProject() {

    //get state from form
    const projectsContext = useContext(projectContext)
    const {form, errorform, showForm, addProject, showError} = projectsContext


    //states
    const [project, setProject] = useState({
        name: '',
    })

    //destructe
    const {name} = project


    //to read content of each input
    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    //when user send a project
    const onSubmitProject = e => {
        e.preventDefault()

        //valid projects
        if(name ===''){
            showError()
            return
        }
        //add state
        addProject(project)

        //restart this form
        setProject({
            name:''
        })
    
    }

    //showform
    const onClickForm = () => {
        showForm()
    }

    return (
        <Fragment>
            <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={onClickForm}
            
            >
                New Project
            </button>

           {
               form
               ?
               (
                <form action=""
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProject}
                >
                <input 
                type="text"
                className="input-text"
                name="name"
                value={name}
                placeholder="Name Project"
                onChange={onChangeProject}
                />    
                <input type="submit"
                className="btn btn-primario btn-block"
                value="Add Project"
                />
                </form>
               )
               :null

           }

           {errorform ? <p className="mensaje error">Name is mandatory</p>: null} 
</Fragment>
    )
}
