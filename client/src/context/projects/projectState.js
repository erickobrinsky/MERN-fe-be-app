import React, {useReducer} from 'react'
import projectContext from './projectContext'
import projectReducer from './projectReducer'
import {FORM_PROJECT, GET_PROJECTS, ADD_PROJECTS, VALID_FORM, CURRENT_PROJECT, DELETE_PROJECT, PROJECT_ERROR } from '../../types'
import clientAxios from '../../config/axios'


const ProjectState = props =>{

    const initialState = {
         projects : [],
        form: false,
        errorform: false,
        project: null,
        message: null
    }

    const [state, dispatch] = useReducer(projectReducer, initialState)

    //functions for crud
    const showForm = () =>{
        dispatch({
            type: FORM_PROJECT,
        })
    }

    //get projects
    const getProjects = async () => {
     try {
         const response = await clientAxios.get('/api/projects')
        dispatch({
            type: GET_PROJECTS,
            payload: response.data
        })
     } catch (error) {
         console.log(error);
     }
    }

    //add new project
    const addProject = async project => {
     try {
         const response = await clientAxios.post('/api/projects', project)
        
            //add project in the state with dispatch
        dispatch({
            type: ADD_PROJECTS,
            payload: response.data
        })
     } catch (error) {
         console.log(error);
     }

     
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
    const deleteProject = async projectId => {
      try {
          await clientAxios.delete(`/api/projects/${projectId}`)
          dispatch({
              type: DELETE_PROJECT,
              payload: projectId
          })
      } catch (error) {
          const alert ={
              msg: 'There was an error',
              category: 'alerta-error'
          }

          dispatch({
              type: PROJECT_ERROR,
              payload: alert
          })
      }
    }


  

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                errorform: state.errorform,
                project: state.project,
                message: state.message,
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