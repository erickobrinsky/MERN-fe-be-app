import {REGISTER_SUCCESS, REGISTER_ERROR, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from '../../types'


export default (state, action) => {
    switch(action.type){

        case REGISTER_SUCCESS: 
        localStorage.setItem('token', action.payload.token)
        return{
            ...state,
            authentificated: true,
            message: null
        }
       
        case REGISTER_ERROR: 
        localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                user: null,
                message: action.payload,
                authentificated: null
            }
       
    

        

        default:
            return state
    }
}