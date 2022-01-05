import {FORM_PROJECT, GET_PROJECTS, ADD_PROJECTS, VALID_FORM, CURRENT_PROJECT, DELETE_PROJECT} from '../../types'


export default (state, action) => {
        switch(action.type) {

            case FORM_PROJECT:
                return {
                    ...state,
                    form: true
                }
//that I pass as a payload is asignated to the state
            case   GET_PROJECTS:
                return{
                    ...state,
                    projects: action.payload
                } 
            
                case ADD_PROJECTS:
                    return{
                        ...state,
                        projects: [...state.projects, action.payload],
                        form: false,
                        errorform: false
                    }
            case VALID_FORM:
                return{
                   //copy of state, the menaning is to keep what I have
                   ...state,
                   errorform: true
                }
                case CURRENT_PROJECT:
                    return{
                       //filter to know in which project the user clicked, filter and create a new array called project
                       ...state,
                       project: state.projects.filter(project => project.id === action.payload)
                    }
                    case DELETE_PROJECT:
                        return{
                         
                           ...state,
                            //this filter with !== bring all projects that are not equals to the select
                           projects: state.projects.filter(project => project.id !== action.payload),
                           project: null
                        }
                

            default: 
            return state
        }

}