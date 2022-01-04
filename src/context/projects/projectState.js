import React, {useReducer} from 'react'
import projectContext from './projectContext'
import projectReducer from './projectReducer'
import {FORM_PROJECT, GET_PROJECTS} from '../../types'


const ProjectState = props =>{

    const projects = [ {id:1,name:'Looking for a job'},
    {id:2,name:'Build website economy'},
    {id:3,name:'Make Aliyah'},   ]


    const initialState = {
         projects : [],
        form: false
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


  

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                showForm,
                getProjects
            }}
        
        >



            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState