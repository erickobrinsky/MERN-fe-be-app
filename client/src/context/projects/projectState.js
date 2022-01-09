import React, {useReducer} from 'react'
import projectContext from './projectContext'
import projectReducer from './projectReducer'
import {FORM_PROJECT, GET_PROJECTS, ADD_PROJECTS, VALID_FORM, CURRENT_PROJECT, DELETE_PROJECT } from '../../types'
import {v4 as uuid} from 'uuid'


const ProjectState = props =>{

    const projects = [ {id:1,name:'Looking for a job'},
    {id:2,name:'Build website economy'},
    {id:3,name:'Make Aliyah'},   ]


    const initialState = {
         projects : [],
        form: false,
        errorform: false,
        project: null
    }

    const [state, dispatch] = useReducer(projectReducer, initialState)

    //functions for crud
    const showForm = () =>{
        dispatch({
            type: FORM_PROJECT,
        })
    }

    //get projects
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    //add new project
    const addProject = project => {
        project.id = uuid()

        //add project in the state with dispatch
        dispatch({
            type: ADD_PROJECTS,
            payload: project
        })
    }

    //valid form by errors
    const showError = () => {
        dispatch({
            type: VALID_FORM,

        })
    }

    //select project that user clicked
    const currentProject = projectId => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: projectId
        })
    }

    //delete projects
    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }


  

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                errorform: state.errorform,
                project: state.project,
                showForm,
                getProjects,
                addProject,
                showError,
                currentProject,
                deleteProject
            }}
        
        >



            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState