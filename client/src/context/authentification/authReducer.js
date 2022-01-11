import {REGISTER_SUCCESS, REGISTER_ERROR, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from '../../types'

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type){

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:     
        localStorage.setItem('token', action.payload.token)
        return{
            ...state,
            authentificated: true,
            message: null
        }
        case GET_USER:
            return{
                ...state,
                user: action.payload,
                authentificated: true,
            }
        case LOG_OUT:
        case LOGIN_ERROR:
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