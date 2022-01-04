import {FORM_PROJECT, GET_PROJECTS} from '../../types'


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

            default: 
            return state
        }

}